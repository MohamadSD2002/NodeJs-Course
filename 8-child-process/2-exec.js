const { exec } = require("child_process")

exec("node -v", (error, stdout, stderr) => {
  if(error) {
    console.log(stderr)
  } else {
    console.log(stdout)
  }
})

exec("python3 -v", (error, stdout, stderr) => {
  if(error) {
    console.log(stderr)
  } else {
    console.log(stdout)
  }
})

exec("git status", (error, stdout, stderr) => {
  if(error) {
    console.log(stderr)
  } else {
    console.log(stdout)
  }
})