class user{
    constructor(name, email){
        this.name=name
        this.email=email
    }

    //getter
    get name(){
        return this._name.toUpperCase();
    }

    //setter
    set name(newName){
        if(newName.length>0){
        this._name=newName
        }else{
            console.log("Name cannot be empty!!");
            
        }

    }
}

const userOne=new user("kashaf", "kashaf@example.com")
console.log(userOne.name);

userOne.name=""
console.log(userOne.name);
