export default function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      logLevel: "debug",
      onProxyReq: (proxyReq, req) => {
        console.log("Proxying request:", req.method, req.url);
      },
      onError: (err, req, res) => {
        console.error("Proxy error:", err.message);
      },
    })
  );
};
