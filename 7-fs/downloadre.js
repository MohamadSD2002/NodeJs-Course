const http = require("https")
const fs = require("fs")
const path = require("path")

const linksPath = path.resolve(__dirname ,"links.txt")
const data = fs.readFileSync(linksPath, "utf-8")

const files = data.split("\n")

const dir = path.resolve(__dirname, "downloads")

if(!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

files.forEach(file => {
  const fileUrl = decodeURI(file)
  const fileName = path.basename(fileUrl).replace(/\s/g, "")
  const filePath = path.resolve(dir, fileName)

  const fileStreem = fs.createWriteStream(filePath)

  http.get(file, function(response) {
    response.pipe(fileStreem)

    response.on("end", () => {
      console.log(`${fileName} downloaded`)
    })
  })

  console.log(filePath)
})

