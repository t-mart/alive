const port = Bun.argv[2] ? parseInt(Bun.argv[2]) : 3000;

Bun.serve({
  port,
  fetch(req, server) {
    const requestIP = server.requestIP(req) ?? { address: 'unknown', port: 0 };
    const time = new Date().toISOString();
    console.log(`${time} - ${requestIP.address}:${requestIP.port} - ${req.method} ${req.url}`);

    return Response.json({ status: "ok" })
  },
});

console.log(`Server is running on http://localhost:${port}`);

process.on("SIGINT", () => {
  console.log("Got SIGINT, shutting down...");
  process.exit();
});