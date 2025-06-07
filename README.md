# healthcheck

Run an HTTP server on port 3000 that responds to any `GET` request with a 200
status code and the JSON body `{"status": "ok"}`.

## Usage

```bash
bun run start
```

## Docker

```bash
docker build -t healthcheck .
docker run -p 80:80 healthcheck
```

### Docker Hub

```bash
docker pull tmmrtn/healthcheck
docker run -p 80:80 tmmrtn/healthcheck
```

## Docker Compose

```yaml
services:
  healthcheck:
    build: .
    ports:
      - "80:80"
```

### Docker Hub

```yaml
services:
  healthcheck:
    image: tmmrtn/healthcheck
    ports:
      - "80:80"
```
