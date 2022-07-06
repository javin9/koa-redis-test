var koa = require('koa')
var session = require('koa-generic-session')
var RedisStore = require('koa-redis')

var app = new koa()
app.keys = ['keys', 'keykeys']
app.use(session({
  store: new RedisStore({
    host: process.env.REDIS_WEB_PORT_6379_TCP_ADDR || "127.0.0.1",
    port: 6379
  }),
  errorHandler (err) {
    console.log("connect failed")
    console.log(err)
  }
}))

app.use(ctx => {
  switch (ctx.path) {
    case '/get':
      get(ctx)
      break
    case '/remove':
      remove(ctx)
      break
  }
})

function get (ctx) {
  var session = ctx.session
  session.count = session.count || 0
  session.count++
  ctx.body = session.count
}

function remove (ctx) {
  ctx.session = null
  ctx.body = 0
}

app.listen(8080)