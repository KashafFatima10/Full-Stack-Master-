//if-else

//<,>,<=,>=,==,===,!=,!==

const isUserLoggedIn = true;

if (isUserLoggedIn) {
    console.log("user is logged in!");
}else{
    console.log("user is not logged in!");
    
}

const temp = 43;
if (temp < 50) {
    console.log("temperature is less than 50");
    
}else{
    console.log("temperature is greater than 50");
    
}

//nested if-else
const balance = 1000;

if (balance < 500) {
    console.log("less than 500");
    
}else if (balance < 750) {
    console.log("less than 750");
    
}else if (balance < 900) {
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}

//multiple conditions check

const userLoggedIn = true;
const debitCard = true;
const loggedInWithGoogle = false;
const loggedInWithEmail = true;

if(userLoggedIn && debitCard){
    console.log("Allowed to buy anything");
    
}

if(loggedInWithEmail || loggedInWithGoogle){
    console.log("user logged in!");
    
}
