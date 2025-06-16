/*forEach loop: executes a function once for each element in an array. */
const coding=["java","cpp","python","ruby","js"]

//by call back function
// coding.forEach( function (items){  
//     console.log(items);
    
// } )

//by arrow function
// coding.forEach( (item)=>{
//     console.log(item);
    
// } )

//make new function
function printItems(item){
    console.log(item);
    
}

coding.forEach(printItems)  //just give reference of function not execute it(printItems() donot do this)

coding.forEach( (items,index,arr)=>{
    console.log(items, index, arr);
    
} )

//array of objects
const myCoding=[
    {
        programmingLanguage:"javascript",
        languageFilename:"js"
    },
    {
        programmingLanguage:"python",
        languageFilename:"py"
    },
    {
        programmingLanguage:"java",
        languageFilename:"java"
    }
]

myCoding.forEach( (item)=>{  //we named objects as item here
   console.log(item.programmingLanguage);
   //console.log(item.languageFilename);
} )