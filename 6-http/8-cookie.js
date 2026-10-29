const http = require("http")

http.createServer((req, res) => {

  if(req.url === "/") {
    const entries = (req.headers.cookie || "").split(";").map((el) => el.trim().split("=")) || []
    const cookies = Object.fromEntries(entries)

    let counter = Number(cookies.counter) || 0

    console.log(cookies)
    res.setHeader(
      "Set-Cookie",
      `counter=${++counter}; Max-Age=3000; HttpOnly; Secure`
    )

    return res.end(`Hello ${counter}`)
  }

  res.statusCode = 404
  res.end("Page not found")

}).listen(3333, () => console.log("server is run"))