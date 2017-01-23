// using process.argv
const myVal = process.argv;

//creating array
let myArr=[];

//adding values to array
myArr.push(Number(myVal[4]));
myArr.push(Number(myVal[5]));

//console log the array
console.log(myArr);

//adding the values to create sum
let a = Number(myVal[4]) + Number(myVal[5]);

//checking the values using if-else
if(Number(myVal[4]),Number(myVal[5])<10)

{
    console.log('THE GIVEN VALUES ARE LESS THAN 10')
    
}

else if(Number(myVal[4]),Number(myVal[5])>10 && Number(myVal[4]),Number(myVal[5])<100)
{
    console.log(' THE GIVEN VALUES ARE GREATER THAN 10 AND LESS THAN 100')
}

else if(Number(myVal[4]),Number(myVal[5])>100 && Number(myVal[4]),Number(myVal[5])<1000)

{
    console.log('THE GIVEN VALUES ARE GREATER THAN 100 AND LESS THAN 1000')
}

else

{
    console.log('THE GIVEN VALUES ARE GREATER THAN 1000')
}
