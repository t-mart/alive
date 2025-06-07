# healthcheck

Run an HTTP server on port 3000 with path `/` that responds with a 200 status code and the JSON body `{"status": "ok"}`.

## Usage

```bash
bun run index.ts
```

## Docker

```bash
docker build -t healthcheck .
docker run -p 80:80 healthcheck
```

### Docker Hub

```bash
docker pull t-mart/healthcheck
docker run -p 80:80 t-mart/healthcheck
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
    image: t-mart/healthcheck
    ports:
      - "80:80"
```
