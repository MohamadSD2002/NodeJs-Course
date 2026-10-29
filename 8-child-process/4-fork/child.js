const heavyProcess = require("./heavy-process")

setTimeout(() => {
  const result = heavyProcess()

  process.send({ result })
}, 0)

process.send("child say: salam")

process.on("message", (data) => {
  console.log(data)
})