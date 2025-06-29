function setUsername(username){
    this.username=username;
    console.log("called");
    

}

function createUser(username, email, password){
    setUsername.call(this, username);
    //setUsername(username);  //it is being called but using it's own this so destroys immediately after call 
    this.email=email;
    this.password=password;

}

const user1=new createUser("kashaf", "kashaf@example.com","123")
console.log(user1);

/*Why .call(this, ...)?
 you tell SetUsername: “Run yourself and use my current this. */
