const http = require("http")

const server = http.createServer((req, res) => {
  // console.log(req.url)
  // console.log(req.headers)
  console.log(req.method)

  // res.statusCode = 500;
  // res.setHeader("content-type", "text/plain")
  // res.setHeader("content-type", "text/html")
  // res.setHeader("content-type", "application/json")

  // const buf = Buffer.from("Mohamad Sedigh")
  // console.log(buf)

  const base64 = convert("Mohamad", "utf-8", "base64")
  console.log(base64)

  res.write("<h1>")
  res.write(base64, "base64")
  res.write("</h1>")

  // const user = { name: "Mohamad", family: "Sedigh" }
  // res.write(JSON.stringify(user))

  res.end()
})

server.listen(3333, () => {
  console.log("server is runnung on 3000")
})

function convert(text, from, to) {
  return Buffer.from(text, from).toString(to)
}