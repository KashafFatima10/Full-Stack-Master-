function multiplyBy5(num){
    return num * 5;
}
multiplyBy5.power=2;   //function can act as function as well as object

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

//Every function has a special property called prototype.
//This property is used when you create objects using a constructor function with the new keyword.

function createUser(username, price){
    this.username=username;
    this.price=price
}

createUser.prototype.increment= function(){
    this.price++;
}

createUser.prototype.printMe= function(){
    console.log(`Price is: ${this.price}`);
    
}

const chai =new createUser("chai", 60)
const tea =new  createUser("tea", 270)

// chai.increment();   //increase price of chai
// chai.printMe();    //Output: 61

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

///

let myName="kashaf    "
String.prototype.trueLength=function(){    //a single function to calculate actual length
    console.log(`True length is: ${this.trim().length}`);
    
}
myName.trueLength();
"zainab   ".trueLength()

////function , array, strings => objects

let fruits=['mango','apple'];

let fruitColor={
    mango: "yellow",
    apple: "red",

    getMangoColor: function(){
        console.log(`Mango color is ${this.mango}`);
        
    }
}
 Object.prototype.kashaf=function(){    //this function is linked with both array and object bcz array is also an object
    console.log("Kashaf is present in all objects");
}

Array.prototype.hiKashaf=function(){
    console.log("Kashaf says Hi");
    
}

fruitColor.kashaf();
fruits.kashaf();
//fruitColor.hiKashaf(); //object
fruits.hiKashaf();

/****Inheritance ****/
const user={
    name: "kashaf",
    email: "kashaf@example.com"
}

const Teacher={
    makeVideo: true
}

const teacherSupport={
    isAvailable: false
}

const TA={
   conductTest: "Programming test",
   fullTime: false,

   __proto__: teacherSupport  //inherit
}

Teacher.__proto__=user;  //inherit

//modern syntax

Object.setPrototypeOf(teacherSupport,Teacher)//inherit
