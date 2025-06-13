const accountId = 12345
let accountEmail = "kashaf@gmail.com"
var accountPassword = "kashaf123"
accountCity = "lahore"

let accountState; //variable declared but not initialized

//accountId=2; not allowed as accountId is a constant and it cannot be changed
accountEmail="fatima@gmail.com";
accountPassword="fatima345"; 
accountcity="multan"; 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);//show data in table format

/* we used const and let to declare variables
const is used for constants, 
let is used for variables that can change
var is not used because of block scope and function scope issues*/