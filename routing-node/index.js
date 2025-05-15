const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  switch (req.url) {
    case "/":
      filePath = path.join(__dirname, "home.html");
      break;
    case "/about":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact":
      filePath = path.join(__dirname, "contact.html");
      break;
    case "/style.css":
      filePath = path.join(__dirname, "style.css");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Página no encontrada</h1>");
      return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end("Error interno del servidor");
    } else {
      let extname = path.extname(filePath);
      let contentType = "text/html";

      if (extname === ".css") {
        contentType = "text/css";
      }

      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    }
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
