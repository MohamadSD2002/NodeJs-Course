const fs = require("fs")
const path = require("path")
const Stream = require("stream")

const chunks = []

const writableStream = new Stream.Writable({
  write: (chunk, encoding, next) => {
    chunks.push(chunk)
    next()
  }
})

const readableStream = new Stream.Readable({
  read: () => {}
})

const filePath = path.resolve(__dirname, "files", "msd-ax.jpg")
const data = fs.readFileSync(filePath)

const chunkSize = 2 ** 10
const chunkCount = parseInt(data.length / chunkSize) + 1

for(let i = 0; i < (chunkCount - 100); i++) {
  const chunk = data.slice(i * chunkSize, (i + 1) * chunkSize)

  readableStream.push(chunk)
}

readableStream.pipe(writableStream)

readableStream.on("close", () => writableStream.end())
writableStream.on("close", () => {
  const buffer = Buffer.concat(chunks)

  console.log("end stream")

  const newFilePath = path.resolve(__dirname, "files", "new-msd-ax.jpg")

  fs.writeFileSync(newFilePath, buffer)
})

readableStream.destroy()
