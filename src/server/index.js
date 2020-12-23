const express = require("express");
const next = require("next");
const loaders = require("./loaders");
const studentsRoutes = require("./routes/students");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Initialize loaders first
  loaders.init(server);

  // Handle API calls
  server.use("/api", studentsRoutes);

  // Handle the rest of the routes natively
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
