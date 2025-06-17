/***falsy values***
false, 0, -0, BigInt 0n, "", null, undefined, NaN*/

/***truthy values***
true, 1, "0", '0', "false", 'false', " ", ' ', [], {}, function(){}*/

const array=[]

if(array.length === 0){
    console.log("array is empty!");
    
}

const object={}

if (Object.keys(object).length === 0) {
    console.log("object is empty!");
    
}

/* false == 0  => true
false == ''  => true
0 == ''  => true */

// Nullish Coalescing Operator (??)=> null , undefined
/*The Nullish Coalescing Operator (??) in JavaScript returns the right side 
if the left side is null or undefined, otherwise it returns the left side. */

console.log("***Nullish Coalescing Operator (??)***")
let val1;
// val1 =5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 15 ?? 20  //in this case if no-null value

console.log(val1)

// Ternary Operator
/*The ternary operator in JavaScript is a quick way to write an if-else in a single line. */
/*Syntax=> condition ? expressionIfTrue : expressionIfFalse;*/

console.log("***Ternary Operator***")
const price = 100
price >= 80 ? console.log("price greater than or equal to 80") : console.log("less than 80")