const Val = process.argv
let myArr = []
myArr.push(Number(Val[2]))
myArr.push(Number(Val[3]))
const mealCost = Number(Val[2])
const tipPercent = Number(Val[3])
const tipAmount = (tipPercent / 100) * mealCost
const totalOwing = tipAmount + mealCost

const outPut = `your meal was $${mealCost} + a ${tipPercent}% tip = ${totalOwing}`

console.log(outPut)
