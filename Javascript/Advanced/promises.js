/**** Promises ****
A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation 
and its resulting value.
  It has three states:
. Pending  => initial state, neither fulfilled nor rejected.
. Fulfilled => operation completed successfully.
. Rejected => operation failed(error)

const promise=new Promise(function(resolve,reject){})   */

//**1**

//creation
const promiseOne = new Promise(function(resolve, reject){
  //do async tasks
  setTimeout(function(){
    console.log("Async task is completed!");
    resolve();   //connect with then()
  },1000)
})

//consumtion
promiseOne.then(function(){
  console.log("Promise consumed!");
  
})

//**2**  (another method)

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  }, 1000)
}).then(function(){
  console.log("Promise 2 consumed");
  
})

//**3**

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "kashaf", email: "kashaf@example.com"} );
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})

//**4**

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({username: "ali", password: "123"})
    }else{
      console.log("Error! something went wrong.");
      
    }
  },1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username;
})
.then((username) => {   //chaining
  console.log(username);
  
})
.catch(function(error){
  console.log(error);
})
.finally(()=>{
  console.log("So, promise is resolved or rejected.");
  
}) 

//**5**

const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({username: "Javascript", password: "123"})
    }else{
      console.log("Error! JS went wrong.");
      
    }
  },1000)
})

async function consumePromiseFive(){
  try {
    const response=await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
  
}

consumePromiseFive();

/***Fetch ***/

// async function getAllUsers(){
//   try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users');
//     const data= await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("Error: ",error);
    
//   }
  
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
  return response.json()  //convert then return
})
.then((data) =>{
   console.log(data);

})
.catch((error) => {
  console.log(error);
  
})