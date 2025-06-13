/**number conversion **/

//let score =33   //here score is in number
let score ="33"  //here in string
//let score ="33abc"  //in numer, NaN
//let score=null     //IN NUMBER , 0
//let score = undefined  //in number ,NaN
//let score=true

//console.log(typeof score)  //string
//console.log(typeof(score))  //string

let valueInNumber = Number(score)   //convert score in number datatype
//console.log(typeof valueInNumber)   //but now number
//console.log(valueInNumber)  //as 33abc not a number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

/**boolean conversion **/
let isStudent= 1  //in boolean ,true
let isStudent= ""  //empty string in boolean , false
let isStudent= "kashaf"  //this also true


let booleanIsStudent = Boolean(isStudent)
console.log(typeof booleanIsStudent)
console.log(booleanIsStudent)

// 1 => true; 0 => false
// "" => false
// "kashaf" => true

/**string conversion **/
let Number = 33

let stringNumber = String(Number)
// console.log(stringNumber);  //in string , 33
// console.log(typeof stringNumber);

