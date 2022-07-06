### redis demo

 安装redis 容器
```bash
docker run  -d  --name redis-web redis
```

构建demo镜像
``` bash
cd koa-redis-test
docker build -t rupid/koa-test .
```
创建容器，并link到redis容器
```bash
docker run -d --name koa-test --link redis-web -p 3000:3000 redis-web rupid/koa-test
```
