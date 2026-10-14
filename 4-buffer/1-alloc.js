// const buf = Buffer.alloc(10, "msd")
// // const buf = Buffer.allocUnsafe(10)

// console.log(buf)
// console.log(typeof buf)

// console.log(buf[0])
// console.log(buf[2])

// console.log("---")

// for(let b of buf) {
//   console.log(b)
// }

// --------------

// const buf_2 = Buffer.from("mohamad sd")

// console.log(buf_2)

// console.log(buf_2.toString())
// console.log(buf_2.toString("base64"))

// --------------

// const buf_3 = Buffer.from("ali")

// console.log(buf_3.toString())
// console.log(buf_3.toString("base64"))

// // 01100001 01101100 01101001
// // 011000010110110001101001
// // 011000 010110 110001 101001
// // Y      W      x      p

// console.log(buf_3)

// --------------

const buf_4 = Buffer.from("محمد صدیق")

console.log(buf_4)
console.log(buf_4.length)

console.log("---")

buf_4.forEach((b, i, buf) => console.log(b));