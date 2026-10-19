const http = require("http")
const fs = require("fs")
const path = require("path")
const URL = require("url")
const qs = require("qs")

function initApp(req, res) {
  const { pathname, query } = URL.parse(req.url)

  req.query = qs.parse(query)
  req.pathname = pathname

  res.json = (data) => {
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(data))
  }
}

const server = http.createServer((req, res) => {
  initApp(req, res)

  const { pathname, method } = req

  if(pathname === "/login", method === "GET") {
    const filePath = path.resolve(__dirname, "form-post.html")
    const data = fs.readFileSync(filePath)

    return res.end(data)
  }

   if(pathname === "/login", method === "POST") {
    const chunks = []

    req.on("data", (chunk) => {
      console.log(chunk)
      chunks.push(chunk)
    })

    req.on("end", () => {
      const buffer = Buffer.concat(chunks)
      const str = buffer.toString()

      const body = qs.parse(str)

      return res.json(body)
    })

    return
  }

  res.statusCode = 404
  res.end("Page not found")
})

const port = 3333
server.listen(port, () => console.log("server is up"))