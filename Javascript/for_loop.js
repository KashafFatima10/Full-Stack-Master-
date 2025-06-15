for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element==5){
        console.log("this number is 5");
    }
    console.log(element);   
}

// for (let i = 0; i <= 5; i++) {
//     console.log(`OUTER LOOP Value ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`INNER LOOP Value ${j} and OUTER LOOP Value ${i}`);
//     }
    
// }

for (let i = 1; i <= 10; i++) {
    console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + "*" + j + "=" + i*j);  
    }
    
}

const myArray = ["apple","mango","cherry","apricot"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

//break and continue

console.log("*******break********");

for (let i = 1; i <= 20; i++) {
    if(i==5){
       console.log("Detected 5");
       break;
    }
    console.log(`Value of i is ${i}`);
    
}

console.log("*****continue*****");

for (let i = 1; i <= 20; i++) {
    if(i==5){
       console.log("Detected 5");
       continue;
    }
    console.log(`Value of i is ${i}`);
    
}