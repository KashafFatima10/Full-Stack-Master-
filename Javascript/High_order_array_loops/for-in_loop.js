//Objects are iterable with for-in loop

const myObject={
    js:"Javascript",
    cpp:"C++",
    py:"Python",
    rb:"ruby"
}

//for in loop
for (const key in myObject) {
    // console.log(key);  //to print key
    // console.log(myObject[key]);  //to print values
    console.log(`${key} is shortcut for ${myObject[key]}.`);
}

const myArray=["js","cpp","py","rb","java"]
for (const key in myArray) {
    //console.log(key);  //print keys of array  Output: 0 1 2 3 4
    console.log(myArray[key]);  //this will print values in array
    
}

//creating maps
const myMap=new Map()

//inserting key and values in map
myMap.set('PAK',"Pakistan")
myMap.set('UAE',"United Arab Emirates")
myMap.set('Fr',"France")

for (const key in myMap) {
    console.log(key);   //print nothing (because map are not iterable in for in loop)
    
}