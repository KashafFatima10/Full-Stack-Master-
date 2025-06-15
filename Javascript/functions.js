function myName(){      //function definition 
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("F");
}

//myName();   // Call (execute) the function myName

// function add(num1,num2){   //pass num1,num2 as function parameters
//     console.log(num1 + num2);    //This function is just printing the addition of two numbers,not returing any result
// }

add(5,3);  //pass numbers (5,3) as arguments
// add(5,"3")

function add(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1 + num2;
}

let result=add(3,5)
console.log("Result:" , result);

function login(username = "zainab"){  //if no argument is passed then use this username
    if(!username){
        console.log("please enter valid username");
        return;
    }
    return `${username} ,just logged in`;
}

//login("kashaf")   //nothing will be printed because function is just returning (no console)
console.log(login()); //use default username
console.log(login("kashaf"));


/*******Functions with objects and arrays *********/
console.log("*****************************")

function calculateCartPrice(...num1){  //when we donot know how may arguments are coming,we use ...operator
    return num1;  
}

console.log(calculateCartPrice(100,200,500,700))  


//function with objects
const user ={
    username:"kashaf",
    price:200
}

function handleObj(anyObject){
    console.log(`The username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObj(user)  //passing object as argument(first made obj and then passed)

handleObj({       //directly passing object
    username:"zainab",
    price:300
})


//function with array
const myArray=[100,200,300,400]

function handleArray(getArray){
    return getArray[2]   //return value at second index of array
}

console.log("value at 2nd index is :",handleArray(myArray))  //300 (make an array and then pass it)
console.log("value at 2nd index is :",handleArray([100,200,300,400]))  //directly passing array