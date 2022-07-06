const session = require('koa-generic-session')
const redisStore = require('koa-redis')
const koa = require('koa')

const app = koa()
app.keys = ['keys', 'keykeys']
app.use(session({
  store: redisStore({
    host: '127.0.0.1',
    port: 8888,
    password: '123456'
  })
}))

app.use(function* () {
  switch (this.path) {
    case '/get':
      get.call(this)
      break
    case '/remove':
      remove.call(this)
      break
    case '/regenerate':
      yield regenerate.call(this)
      break
  }
})

function get () {
  const session = this.session
  session.count = session.count || 0
  session.count++
  this.body = session.count
}

function remove () {
  this.session = null
  this.body = 0
}

function* regenerate () {
  get.call(this)
  yield this.regenerateSession()
  get.call(this)
}

app.listen(8080)