const myArray=[1,2,3,4,5]  //can contain mixed datatypes , resizeable
const myArr=new Array(0,1,2,3)  //another method to declare array

console.log(myArray[0]);  //access first element

//array methods
myArray.push(6)   //add this element at end of array
console.log(myArray) 

myArray.pop()  //remove the last element from array
console.log(myArray) 

myArray.unshift(0)  //add element at start of array
console.log(myArray) 

myArray.shift()  //remove first element of array
console.log(myArray) 

console.log(myArray.includes(4))  //if 9 present in array or not => output : true
console.log(myArray.indexOf(4))  //give index of element 4  => output: 3

let newArr= myArray.join()  // Join the array elements into a string
console.log(myArray) 
console.log(newArr)  //convert array to a string format => OUTPUT: 1,2,3,4,5
console.log(typeof newArr) //string

//slice , splice
console.log("***SLICE***")
const myn1=myArray.slice(1,3)  //slice the array from index 1 to 3 (last not include)
console.log("slice",myn1)  //=> output: 2,3
console.log(myArray)  //output : [1,2,3,4,5]

console.log("***SPLICE***")
const myn2=myArray.splice(1,3)  //it includes last element also
console.log("splice",myn2)  //output: 2,3
console.log(myArray)  //output: [1,5]

//splice changes original array means removes the slice elements from it while slice does not do this
