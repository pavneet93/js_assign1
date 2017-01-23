const Val = process.argv;
let myArr = [Number(Val[2])];
console.log("Third Value from process.argv : " + myArr);
myArr.push(Number(Val[3]));
let x = Number(Val[2]);
let y = Number(Val[3]);
let z =x + y;
console.log("Addition of 3rd and 4th commandline argument : " + z);
