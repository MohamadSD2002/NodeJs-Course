const http = require("http");
const cluster = require("cluster");
const cpuCount = require("os").cpus().length;

console.log(cpuCount)

if (cluster.isMaster) {
  process.title = "Parent: Node"

  for (let i = 0; i < cpuCount; i++) {
    cluster.fork();
  }
} else {
  // workers can share any TCP connection

  process.title = "Child: Node" + process.pid

  makeServer();
}

function makeServer() {
  http
    .createServer((req, res) => {
      res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
      res.end(process.pid + "");
    })
    .listen(3000, () => {
      console.log(`server is runnung on ${3000} and process ${process.pid}`);
    });
}
