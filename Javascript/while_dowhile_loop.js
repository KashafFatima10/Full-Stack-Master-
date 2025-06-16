
//while loop
console.log("*****WHILE LOOP*****");


let i=0;
while (i<=10) {
   console.log(`Value of index is ${i}`);
   i++
}

//array
let myArray=["apple","mango","cherry","blue-berry"]

let index =0
while (index<=myArray.length) {
    console.log(`Name of fruit is ${myArray[index]}`);
    index++
}

//do-while loop
console.log("*****DO-WHILE LOOP*****");

let score=1

do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);