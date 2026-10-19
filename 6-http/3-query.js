const http = require("http")
const fs = require("fs")
const path = require("path")
const URL = require("url")

function initApp(req, res) {
  const { pathname, query } = URL.parse(req.url)

  req.query = {}
  if(query) {
    const arrayQuery = query.split("&").map((el) => el.split("="))

    req.query = Object.fromEntries(arrayQuery)
  }

  req.pathname = pathname

  res.json = (data) => {
    res.setHeader("content-type", "application/json")
    res.end(JSON.stringify(data))
  }
}

const server = http.createServer((req, res) => {
  initApp(req, res)

  const { pathname, query } = req

  if(pathname === "/") {
    const filePath = path.resolve(__dirname, "form-get.html")
    const data = fs.readFileSync(filePath)

    return res.end(data)
  }

  if(pathname === "/contact") {
    res.setHeader("content-type", "application/json")

    return res.json(query)
  }
})

const port = 3333
server.listen(port, () => console.log(`server is running on port ${port}`))