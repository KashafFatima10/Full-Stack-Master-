//two types of datatypes     1-primitive datatype   2-non-primitive (reference)
console.log("primitive datatype");   //they are call-by value
/**7 types of primitive dadatypes
String, Number, Boolean, null, undefined, Symbol, BigInt **/

const score = 100
const scoreValue = 100.5

const isLoggedIn = false
const Temp = null
let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //false 

/*Every time you create a Symbol, it's guaranteed to be unique — 
even if you create two symbols with the same description.*/

const bigNumber = 123678986544678999n  //bigInt


console.log("non-primitive")
/**arrays , objects, functions **/

const fruits = ["apple" ,"mango", "banana", "orange"]  //array
let myObj={      //object
    myName:"kashaf",
    age:20,
}

const myFunction = function(){    ///function
    console.log("hello world!")
}

console.log(typeof anotherId);
console.log(typeof Temp);  //object , null =>datatype object
console.log(typeof scoreValue);
console.log(typeof myFunction); //function
console.log(typeof myObj);  //object
console.log(typeof fruits);  //object
/**
1) Primitive DataType : -

i) Number => number
ii) String => string
iii) Symbol=symbol
iv) Null=> null
v) Boolean => boolean
vi) undefined=> undefined
vii) BigInt => bigint

2 ) Non Primitive DataType :-


i)Array  =>  object
ii)  Object  => object 
iii) function =>  function **/