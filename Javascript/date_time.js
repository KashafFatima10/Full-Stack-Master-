let myDate=new Date()  //date object with current date and time
console.log(myDate.toString());
console.log(myDate.toDateString());  //convert date part in string
console.log(myDate.toTimeString());  //convert time in string
console.log(myDate.toLocaleString());  //in local form
console.log(myDate.toISOString());

console.log(typeof myDate)  //object

console.log("+++++++++++++++++++++")
//let myCreatedDate=new Date(2025,5,14)  //in JS months start from 0 so 5 month =>june
//let myCreatedDate = new Date(2025,5,14,7,13)
let myCreatedDate = new Date('2025-06-14')
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.getTime())  //get timestamps in millisec since jan 1,1970

let myTimeStamp = Date.now()
console.log(myTimeStamp)  //get current  timestamps in millisec since jan 1,1970

console.log("***in seconds***")
let sec=Math.floor(Date.now()/1000)
console.log(sec)

let newDate=new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)  //AS MONTHS START FROM 0 SO EXPLICITLY ADD 1
console.log(newDate.getDay())