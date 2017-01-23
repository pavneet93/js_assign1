const myVal= process.argv
let myArr=[ ]
myArr.push(myVal[3])
console.log(myArr)
myArr.unshift(myVal[2])
console.log(myArr)
myArr.push(myVal[6])
myArr.pop()
myArr.shift()
console.log(myArr)