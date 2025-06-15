//creating objects using constructor
//singleton

const myUser=new Object()

myUser.name="kashaf"
myUser.id="123abc"
myUser.isStudent=true

console.log(myUser);

const regularUser={
    email:"kashaf@gmail.com",
    userfullname:{    //nesting in object
        fullname:{
            firstname:"kashaf",
            lastname:"fatima"
        }
    }
}

console.log(regularUser.userfullname.fullname)

//combining two objects using assign
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3= Object.assign(obj1,obj2)  //combines obj1 and obj2 and modify obj1 having combined values
//console.log(obj1)


const obj3= Object.assign({},obj1,obj2)  //this will combine obj1 and obj2 in an empty obj{} (doesnot modify obj1)
console.log(obj3)
console.log(obj1)

//combining objects using spread(...)

const obj4={...obj1,...obj2}
console.log(obj4)


const users=[    //array of various objects
    {
        id:1,
        name:"kashaf",
    },
    {
        id:1,
        name:"kashaf",
    },
    {
        id:1,
        name:"kashaf",
    },
]

console.log(users[1].name)

console.log("********METHODS**********")
console.log(myUser)
console.log(Object.keys(myUser))  //output in array//give all keys of object =>output: ['name','id','isStudent']
console.log(Object.values(myUser)) //give all values of object
console.log(Object.entries(myUser)) //convert each key,value pair in separate arrays

console.log(Object.hasOwnProperty('name'))  //check if name key present in object or not
console.log(Object.hasOwnProperty('email'))


/*****************OBJECTS de-structure ***************/
//Object Destructuring in JavaScript means unpacking properties from an object into separate variables
console.log("****************")

const course={
    courseName:"Calculus",
    price:999,
    courseInstructor:"Ali Ahmed"
}

// console.log(course.courseInstructor)  //way to access value 
const {courseInstructor:instructor}=course  
console.log(instructor)


//****************JSON API ******/
console.log("*****************json api***********");
//In JSON API format key and values both are in strings
// {
//     "name":"kashaf",
//     "course":"ict",
//     "price":"free"
// }

