console.log('Hello from Docker & GitHub\!');
setInterval(() => {
  console.log("Hello from Docker & GitHub!");
}, 2000);
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Buddy! Your Node app is running in Docker!");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});

