const myVal = process.argv
let myArr = []


myArr.push(Number(myVal[2]))
myArr.push(Number(myVal[3]))
console.log(myArr)
let sum=0
for ( let i=0,sum=0; i<=myArr.length; sum  +=myArr[i++]) 
{
  
}
if(sum>1000)
{
    console.log(`Sum greater than 1000`);
}
else if(sum<1000 && sum>=100)
    {
    console.log(`Sum is less than 1000 and greater than 100`);
} else{
    console.log('sum is less than 100 and greater than 10')
}

