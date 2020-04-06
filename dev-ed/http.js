const http = require("http"); // utk module protokol http
const path = require("path"); // utk module pengaksesan file dan direktori
const fs = require("fs"); // utk module pengaksesan interaksi filesystem

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      console.log("Position: Home");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
  if (req.url === "/user") {
    console.log("Position: User");
    res.write("Welcome user, Adam!");
    res.end();
  }
});

server.listen(3000, () => console.log("Server is up and running..."));
