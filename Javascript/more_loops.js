//for of loop

let arr=[1,2,3,4,5]  //array
for (const num of arr) {
    console.log(`Number is ${num}`);
    
}

let greetings="Hello world!"  //string
for (const greet of greetings) {
    console.log(`Each char in greeting is ${greet}`);
    
}

//Maps
/*A Map is a built-in JavaScript object that stores key-value pairs (only unique values) 
where keys can be of any type 
(like strings, numbers, objects, etc.), and it remembers the insertion order of the keys. */

//creating maps
const myMap=new Map()

//inserting key and values in map
myMap.set('PAK',"Pakistan")
myMap.set('UAE',"United Arab Emirates")
myMap.set('Fr',"France")
myMap.set('PAK',"Pakistan")  //not printed because map accepts only unique values

console.log(myMap);

//for of loop on maps
for (const [key,value] of myMap) {
    console.log(key , ":-" ,value);
    
}