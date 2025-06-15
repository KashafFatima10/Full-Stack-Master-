/*Code ecxecution phases in JS
1. Global execution phase
2.Memory creation phase
3.Exection phase */


let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2;
    return total
}

let result1=addNum(val1,val2)
let result2=addNum(5,5)

/*For above code
1. Global execution phase  => everything goes in this

2.Memory creation phase  (all variables are set to undefined first)
val1=undefined
val2=undefined
addNum=function definition
result1=undefined
result2=undefined

3.Exection phase
val1<-10
val2<-5
addNum->new variable environment + execution thread (then again memory phase and execution phase)
result1<-total
result2<-total 
*/

/*In call STACK , LIFO(last in first out) is  execuuted */