const user={
    username:"kashaf",
    price:5000,

    welcomeMessage:function(){
       console.log(`${this.username} , welcome to website.`)
       console.log(this);  //print this object=>user
    }
}

user.welcomeMessage();
user.username="zainab"  //now we changed username
user.welcomeMessage();

console.log(this)  //{} empty object, because there is no global object here

/*At the global level in a browser, this points to window.*/


// const anotherUser=function(){
//     const username="kashaf"
//     console.log(this)
// }

// anotherUser()

console.log("*****ARROW FUNCTION*****")
// const anotherUser= () => {
//     const username="kashaf"
//     console.log(this)
// }

// anotherUser()

// const add=(num1,num2) => {   //with {}  we have to use return
//     return num1 + num2;
// }

const add=(num1 , num2) => (num1 + num2)  //another way(with() we donot have to use return)

console.log(add(3,4));

const objectFun=() => ({username:"kashaf"})

console.log(objectFun())