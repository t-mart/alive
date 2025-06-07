# healthcheck

Run an HTTP server on port 3000 that responds to any `GET` request with a 200
status code and the JSON body `{"status": "ok"}`.

## Usage

```bash
bun run start
```

## Docker

```bash
docker pull tmmrtn/healthcheck
docker run -p 3000:3000 tmmrtn/healthcheck
```

### Docker Hub

```yaml
services:
  healthcheck:
    image: tmmrtn/healthcheck
    ports:
      - "3000:3000"
```
