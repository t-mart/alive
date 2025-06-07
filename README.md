# alive

Run an HTTP server on port 3000 that responds to any `GET` request with a 200
status code and the JSON body `{"status": "ok"}`.

This service is useful for testing network connectivity.

Available on [Docker Hub](https://hub.docker.com/r/tmmrtn/alive).

## Usage

```bash
bun run start
```

## Docker

```bash
docker pull tmmrtn/alive
docker run -p 3000:3000 --rm tmmrtn/alive
```

## Docker Hub

```yaml
services:
  alive:
    image: tmmrtn/alive
    ports:
      - "3000:3000"
```
