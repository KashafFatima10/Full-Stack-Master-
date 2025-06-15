//Global scope &Local scope
//{} curly braces is actually a scope

let a=100  //global scope

if(true){   //scope of variables is till this if condition only (local/block scope)
    let a=10
    const b=20
    console.log("INNER: ", a);
    //var c=30
}

//console.log(a);  //error : a is not defined
//console.log(b);  //error: b is not defined
//console.log(c);  //it will be printed, this is issue with var (scope issue)


console.log("OUTER:", a)  //100 


//nested functions
/**child functions can access variables of parent function but parent function cannot access 
variables of child functions**/

function one(){  //parent function
    const username="kashaf";

    function two(){  //child function
        const password="abc123"
        console.log(username);
    }

    //console.log(password)  //give error bcz scope of password is till the function two() not outside it

    two();
}

one();

if (true){
    const username="kashaf"
    if(true){
        const password="abc123"
        console.log(`username is ${username} and password is ${password}`)
    }
    //console.log(password); //error:  out of scope
}

//console.log(username) //error:  out of scope


console.log(addOne(5))  //can access addOne() before defining it in this case
function addOne(num){  //simply defined function
    return num+1;
}

//console.log(addTwo(5))  //Error: Cannot access 'addTwo' before initialization
const addTwo=function(num){  //stored return of function in variable
    return num+2;
}

console.log(addTwo(5))

