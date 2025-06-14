/**number conversion **/

//let score =33   //here score is in number
let score ="33"  //here in string
//let score ="33abc"  //in numer, NaN
//let score=null     //IN NUMBER , 0
//let score = undefined  //in number ,NaN
//let score=true

//console.log(typeof score)  //string
//console.log(typeof(score))  //string

//let valueInNumber = Number(score)   //convert score in number datatype
//console.log(typeof valueInNumber)   //but now number
//console.log(valueInNumber)  //as 33abc not a number

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

/**boolean conversion **/
let isStudent= 1  //in boolean ,true
//let isStudent= ""  //empty string in boolean , false
//let isStudent= "kashaf"  //this also true


let booleanIsStudent = Boolean(isStudent)
//console.log(typeof booleanIsStudent)
//console.log(booleanIsStudent)

// 1 => true; 0 => false
// "" => false
// "kashaf" => true

/**string conversion **/
let Number = 33

let stringNumber = String(Number)
// console.log(stringNumber);  //in string , 33
// console.log(typeof stringNumber);


/********operations ********/

let value =5

let negValue=-value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //2 power 3
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " kashaf"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2");  //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2");  //32
//if first string then it will convert whole in string
//if first numbers then perform operator on numbers and concatenate it with string
//if both string, concatenate them

// console.log( (3 + 4) * 5 % 3);  //we prefer to use brackets to avoid confusion

// console.log(+true) //1
// console.log(+"")  //0

let num1 , num2, num3
num1=num2=num3= 2+2

let counter =100
counter++
console.log(counter)

let myCounter =100
++myCounter
console.log(myCounter)



