// UV_THREADPOLL_SIZE = 12

// console.log("salam")
// console.log(process)
// console.log(process.cwd())

// process.title = "Anisa"
// setTimeout(() => {}, 60000)

// console.log(process.pid)
// console.log(process.ppid)

// console.log(process.uptime())

setInterval(() => {
  console.log(Date.now())
}, 1000)

setTimeout(() => {
  process.exit()
}, 5000)

process.on("uncaughtException", (ex) => {
  console.log(ex)
})
throw "Error"