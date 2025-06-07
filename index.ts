const PORT = process.env.PORT || 3000;

Bun.serve({
  port: PORT,
  fetch(req, server) {
    const {address, port} = server.requestIP(req) ?? { address: 'unknown', port: 0 };
    const time = new Date().toISOString();
    console.log(`${time} - ${address}:${port} - ${req.method} ${req.url}`);

    return Response.json({ status: "ok" })
  },
});

console.log(`Server is running on http://localhost:${PORT}`);
