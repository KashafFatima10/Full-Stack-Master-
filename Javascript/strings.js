const name = "kashaf fatima"   //HERE it is primitive sring
const age = 20

//console.log(name + age + "student")  //concatenate strings (but not a good approach)

console.log(`My name is ${name} and my age is ${age}`)

const gameName = new String ("GTAViceCity")  //another way to declare string 
console.log(gameName)

console.log(typeof name)  //string
console.log(typeof gameName)  //string object

console.log(gameName[0])  //G
console.log(gameName[1])  //T

console.log(gameName.length)
console.log(gameName.toUpperCase())  //convet in upper case
console.log(gameName.charAt(2))  //character at 2 position
console.log(gameName.indexOf('A'))  //index of character A

const newString = gameName.substring(0,6)  //return substring but exclude last index character
console.log(newString)  //GTAVic

const anotherString = gameName.slice(-10,6)
console.log(anotherString)  //extract from index 1 to 6 (11-10=1)

const secondString = "    kashaf    "
console.log(secondString)
console.log(secondString.trim())  //remove extra spacing

const url="https://kashaf.com/kashaf%20fatima.com"
console.log(url.replace('%20','-'))  //replace %20 with -
console.log(url.includes('kashaf'))   //if kashaf present in url or not  (true or false)
console.log(url.includes('hello'))

const greeting="hello to pakistan "
console.log(greeting.split(' '))  //split on basis of space ' '
