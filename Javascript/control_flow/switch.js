//switch statements

const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("febraury");
        break;
    case 3:
        console.log("march");
        break;    //if we not put break here, it will execute all the next code except default 
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        
        break;
}