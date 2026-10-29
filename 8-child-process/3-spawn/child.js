process.title = "Child - Node"

console.log("child pid", process.pid)
console.log("child ppid", process.ppid)

const intervalId = setInterval(() => {
  console.log("Now", Date.now())
}, 1000)

// setTimeout(() => {
//   // clearInterval(intervalId)
//   // process.exit()
//   throw new Error("My Error")
// }, 10000)

