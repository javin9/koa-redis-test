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
docker run -d --name koa-test --link redis-web -p 8080:8080 redis-web rupid/koa-test
```

```bash
docker exec -it koa-demo /lib/sh
root@fd31d89ab869:/app# env
# ip地址
REDIS_WEB_PORT_6379_TCP_ADDR=172.18.0.2
REDIS_WEB_ENV_REDIS_VERSION=7.0.2
HOSTNAME=fd31d89ab869
YARN_VERSION=1.22.19
REDIS_WEB_PORT=tcp://172.18.0.2:6379
REDIS_WEB_NAME=/koa-web/redis-web
```

### 测试
```bash
curl http://127.0.0.1:8080/get
curl http://127.0.0.1:8080/remove
curl http://127.0.0.1:8080/regenerate
```

查看日志
```bash
docker logs koa-demo
```