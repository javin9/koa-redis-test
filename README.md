### redis demo

 安装redis 容器
```bash
docker run --name redis-koa redis
```
构建demo镜像
``` bash
cd koa-redis-test
docker build -t rupid/koa-redis .
```