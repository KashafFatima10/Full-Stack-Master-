const user={
    username: "kashaf",
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username} ,LoginCount: ${this.loginCount} ,IsSignedIn: ${this.signedIn}`);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());

/****Constructor ****/

function User(username, loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greetings=function(){
        console.log("Hello World!");
        
    }

    //return this;
}

//const userOne=User("kashaf", 15, true);
//const userTwo=User("zainab", 6, false);  //this will override the previous values so user 'new' keyword

const userOne=new User("kashaf", 15, true);
const userTwo=new User("zainab", 6, false);  //new instance
console.log(userOne);
console.log(userTwo);


