const user ={
   name: "kashaf",
   age: 20,
   isStudent: true
}

console.log(Object.getOwnPropertyDescriptor(user,"name"));

Object.defineProperty(user, "name", {
    value: "zainab",
    writable: false,
    enumerable: true,
    configurable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));
