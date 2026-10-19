const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html")

  if(req.url === "/") {
    return res.end("Home Page")
    // log to db
    // send notifiction
    // send email
  }

  if(req.url === "/about") {
    // Relative path; may differ across operating systems.
    // const data = fs.readFileSync("./about.html")

    // Resolves the path automatically across operating systems.
    const filePath = path.resolve(__dirname, "about.html")
    const data = fs.readFileSync(filePath)

    return res.end(data)
  }

  if(req.url === "/favicon.ico") {
    const filePath = path.resolve(__dirname,"public" ,"favicon.ico")
    const data = fs.readFileSync(filePath)

    return res.end(data)
  }

  res.statusCode = 404
  res.end("Page not found")
})

const port = 3333

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})