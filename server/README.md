# Sorting Hat Server

## Getting started

### Docker

1. First things first, build your image

```sh
docker build -t <imagename> .
```

2. Kick off container a development container but ensure `node_modules` aren't overwritten in container

```sh
docker run -it -p 8080:8090 -v ${PWD}/:/app -v /app/node_modules <imagename>
```