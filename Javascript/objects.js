//objects are used to store various keyed collections and more complex entities.
//  Objects can be created using the Object() constructor(singleton) or the object literal syntax.


//object literals
const mySymbol=Symbol("key1")

const myObj={
    name: "kashaf",
    [mySymbol]: "mykey1",  //to use symbol as symbol not as string we used []
    age: 20,
    isStudent: true,
    email: "kashaf@gmail.com",
    uniDays: ["monday","tuesday","wednesday"]
}

console.log(myObj.name)  //can access object values like this(. notation)
console.log(myObj["name"])  //another method ([] method)
console.log(myObj[mySymbol])   //symbol is accessed like this
// console.log(typeof myObj[mySymbol])

myObj.email="zainab@gmail.com"   //change any value in object
console.log(myObj["email"])

//Object.freeze(myObj)  //now we cannot change any value in object
myObj.email="hello@gmail.com"  //this change doesnot reflect because object is freezed
console.log(myObj)

//creating functions for objects
myObj.greeting = function(){
    console.log("Hello my Object!");
}

myObj.greetingTwo = function(){
    console.log(`Hello my Object ,${this.name} `);
}

console.log(myObj.greeting());
console.log(myObj.greetingTwo());





