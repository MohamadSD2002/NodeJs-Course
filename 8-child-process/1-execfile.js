const { execFile } = require("child_process")

// execFile("ls", ["-l"], (error, stdout, stderr) => {
//   if(error) {
//     console.log(stderr)
//   } else {
//     console.log(stdout)
//   }
// })

execFile("node", ["-v"], (error, stdout, stderr) => {
  if(error) {
    console.log(stderr)
  } else {
    console.log(stdout)
  }
})