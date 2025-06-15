//Immediately Invoked Function Expressions(IIFE)
/*IIFE is a function that runs immediately after it's defined.
It’s a way to execute code without polluting the global scope.*/

(function greeting(){   //1 (named IIFE)
    console.log("Salam!Everyone here.")
})();      //here () means function execution immediately after defining it=> this is IIFE

( () => {    //2   (unnamed IIFE)
    console.log("Bye!Everyone here.")
})();

((name) =>{   //3 (passing parameters)
    console.log(`Hello to ${name}`)
})("kashaf");  //same as function("kashaf")

//; semicolon is neccesary to write two ot more IIFE altogether