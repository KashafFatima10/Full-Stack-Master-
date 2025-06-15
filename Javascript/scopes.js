//Global scope &Local scope

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