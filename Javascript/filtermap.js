const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums= myNums.filter( (num) => {  //filter contain call back function
//     return num > 5    //same as for Each but fro each does not return values...but this return values
// })
// console.log(newNums);

const newNums=[]
myNums.forEach( (num) => {
    if(num > 5)
        newNums.push(num)
})
console.log(newNums);

/////////////Books example
const books = [
  {
    title: "Peer e kamil",
    author: "Umerah Ahmed",
    year: 1960,
    genre: "Fiction"
  },
  {
    title: "Abe Hayat",
    author: "Umerah Ahmed",
    year: 1949,
    genre: "Romantic"
  },
  {
    title: "Jannat k Pattay",
    author: "Nemrah Ahmed",
    year: 1925,
    genre: "Fantasy"
  },
  {
    title: "Bakht",
    author: "Mehrunissa",
    year: 1937,
    genre: "Fantasy"
  },
  {
    title: "Namal",
    author: "Nemrah Ahmed",
    year: 1926,
    genre: "Classic"
  }
];

const userBooks=books.filter( (bk) =>{
    return bk.genre === "Fantasy"&&bk.year==1925
})
console.log(userBooks);


//***************Maps ************/

// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers= numbers.map( (num) =>{
//     return num + 10
// })
// console.log(newNumbers);

//**********chaining ***********/

//const numbers = [1,2,3,4,5,6,7,8,9,10]

// const newNumbers=numbers
//                 .map((num) => num * 10)
//                 .map((num) => num + 1) 
//                 .filter( (num) => num>=40)               
// console.log(newNumbers);

//**************reduce **************/

const numbers = [1,2,3]

// const myTotal=numbers.reduce( function (accumulator, currentValue){
//     console.log(`Accumulator ${accumulator} and curr value ${currentValue}`);
    
//     return accumulator + currentValue
// },0)  //to start accumulator with 0

/*by arrow func */
const myTotal = numbers.reduce ( (accumulator , currValue) => {
    console.log(`Accumulator ${accumulator} and curr value ${currValue}`);
    
    return accumulator + currValue 
},0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const myCartPrice=shoppingCart.reduce( (accumulator, item) => {
    return accumulator+item.price
},0)

console.log(myCartPrice);