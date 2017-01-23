const myVal = process.argv
let myArr = []


myArr.push(Number(myVal[2]))
myArr.push(Number(myVal[3]))
const tipAmount =(myArr[3]/100)*myArr[2]
const totalOwing =tipAmount+myArr[2]
const outPut = `Total payment`+ totalOwing
console.log(outPut)
