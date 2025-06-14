let score=400  //number
console.log(score);

let balance=new Number(100)  //number object
console.log(balance)

console.log(balance.toString().length)  //now balance is converted to string
console.log(balance.toFixed(3))  //format number to 3 decimal places

const anotherNumber=12.9987
console.log(anotherNumber.toPrecision(4));  //format number to 4 significant digits

const hundreds=1000000
console.log(hundreds.toLocaleString());     //format numbers with separators
console.log(hundreds.toLocaleString('en-US'));  //by US standard

/***************MATH ***********/
//Math is a built-in(by-default) library with properties and methods for mathematical operations.
console.log("******MATH*****")
console.log(Math);
console.log(Math.abs(-5));   //absolute value
console.log(Math.round(3.6));  //round
console.log(Math.ceil(4.3))   //round up to nearest integer
console.log(Math.floor(4.9))  //round down to nearest integer
console.log(Math.max(4,5,2,6))  //max value
console.log(Math.min(4,5,2,6))  //min value

console.log(Math.random())  //random value btw 0 and 1
//console.log(Math.random()*10)  //random value btw 0 and 10
//console.log((Math.random()*10)+1)  //random value btw 1 and 10
console.log(Math.floor((Math.random()*10)+1))

const max=20
const min=10

console.log(Math.floor(Math.random() * (max-min+1))+min)  //numbers btw 10 and 20 (inclusive)