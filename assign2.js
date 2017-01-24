const Val = process.argv;
let myArr = [Number(Val[2])];
console.log("Third Value from process.argv : " + myArr);
myArr.push(Number(Val[3]));
let a = Number(Val[2]);
let b = Number(Val[3]);
let c =a + b;
console.log("Addition of 3rd and 4th argument : " + c);
