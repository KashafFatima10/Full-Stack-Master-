const fruits=["apple","orange","mango"]
const vegs=["onion","tomato","potato"]

// fruits.push(vegs)
// console.log(fruits)  //original array changed having boh fruits and vegs
// console.log(fruits[3][0]) //access onion from nested array
// console.log(fruits[3][1])  //access tomato from nested array

let combine=fruits.concat(vegs)
console.log(fruits)  //original array remain same
console.log(combine)  //new array having both arrays(fruits & vegs)

//use spread to combine two arrays
let newCombine=[...fruits,...vegs] //spread each element of array
console.log(newCombine)

const anotherArray=[1,2,[3,[4,5,6],8,[9,10,[7]]]];
// Flattening the nested array using flat method
const flat_array = anotherArray.flat(Infinity); 
console.log(flat_array); 

//checking if variable array or not
console.log(Array.isArray(fruits))  //true
console.log(Array.isArray("kashaf"))  //false

//converting string into array
console.log(Array.from("kashaf"))  //['k','a','s','h','a','f']
console.log(Array.from({name:"kashaf", age:20}))  //create array from object values

//creating array using array.of
let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3))
