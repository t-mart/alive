# alive

Run an HTTP server on port 3000 that responds to any `GET` request with a 200
status code and the JSON body `{"status": "ok"}`.

This service is useful for testing network connectivity.

The port on which the server listens can be changed by providing an additional
integer argument.

Available on [Docker Hub](https://hub.docker.com/r/tmmrtn/alive).

## Usage

```bash
bun run start
```

Or, run on a different port:

```bash
bun run start 8080
```

## Docker

```bash
docker pull tmmrtn/alive
docker run -p 3000:3000 --rm tmmrtn/alive
```

Or, run on a different port:

```bash
docker run -p 8080:8080 --rm tmmrtn/alive 8080
```

## Docker Compose

```yaml
services:
  alive:
    image: tmmrtn/alive
    ports:
      - "3000:3000"
```
