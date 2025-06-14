//memoryin JS
//2 types   STACK(used in primitive)     HEAP(used in non-primitive)
console.log("*******STACK*******")  //Values on stack are stored directly, and access is by value.(copy is passed)

let myName = "kashaf fatima" 

let anotherName = myName
anotherName = "zainab fatima"

console.log(myName);
console.log(anotherName);  //zainab fatima ((since it's a separate copy))

console.log("*******HEAP*******")  //Values in the heap are accessed by reference.(Change reflects in original)
let userOne={
    email:"kashaf@gmail.com",
    userId: 12345
}

let userTwo = userOne
userTwo.email = "zainab@gmail.com"
console.log(userOne.email)   //changed in original (since both refer to the same object in heap)
console.log(userTwo.email) 

/**
Primitive:
Stored directly on stack
Copied by value

Non-Primitive (objects, arrays, functions):
Stored on heap
Reference (pointer) is kept on stack
All copies refer back to the same object in heap **/