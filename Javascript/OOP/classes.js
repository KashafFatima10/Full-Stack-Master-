class user{
    constructor(username, email, password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne=new user("kashaf", "kf@example.com", "12345")
console.log(userOne.encryptPassword());
console.log(userOne.capitalizeUsername());

//****Inheritance ****/

// Parent class (Base class)
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child class (Derived class) inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call parent constructor
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks. It is a ${this.breed}.`);
  }
}

// Create objects
const dog1 = new Dog("Tommy", "Labrador");

dog1.speak(); 

/******Static ******/
class User{
  constructor(username){
    this.username=username;
  }

  logMe(){
    console.log(`Username: ${this.username}`);
    
  }

  static createId(){
    return '123';
  }
}

/*const kashaf=new User("kashaf");
console.log(kashaf.createId());*/

const kashaf=new User("kashaf");
console.log(kashaf.logMe());



// Calling static method
// const kashaf=new User("kashaf");
// console.log(kashaf.createId());
// Invalid: kashaf.createId() => this will give error bcz craeteTd() is static functiion

