const Stream = require("stream")

const writableStream = new Stream.Writable()

writableStream._write = (chunk, encoding, next) => {
  console.log(chunk.toString())
  // console.log(encoding)
  next()
}

const readableStream = new Stream.Readable()

readableStream.pipe(writableStream)

readableStream._read = (size) => {
  // console.log("size", size)
}

let counter = 1

const intervalId = setInterval(() => {
  readableStream.push(String(counter++))
}, 2000)

readableStream.on("close", () => writableStream.end())
writableStream.on("close", () => console.log("end stream"))

setTimeout(() => {

  readableStream.destroy()

  clearInterval(intervalId)
}, 8000)