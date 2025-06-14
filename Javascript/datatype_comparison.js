// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1)   //js converted "2" in number
// console.log("02" > 1)

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

//reason is that equality == and comparisons like <,>,<=,>= bahaves differently in JS
//comparisons convert null to a number,treatinng as 0
//thats why null >= 0 is true , here null is 0 and 0 =0

console.log(undefined == 0);  //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false


//strict check ===
console.log("strict check(===)")  //check values strictly means also check datatypes of values

console.log("2" == 2)  //here true, bcz converting "2" in number
console.log("2" === 2)  //here false bcz dfferent datatypes as strict checking here