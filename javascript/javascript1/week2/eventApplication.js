//Event application

//Get the name of the weekday (not just a number):
const weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
const day=new Date();
//convert numeric day to day
let today=weekday[day.getDay()];
console.log(`Today is ${today}.`);

//Calculating the event week day
function getEventWeekday(num) {
    let dayNum=num + day.getDay();
    let held;
    if (dayNum < 6){
         held=weekday[dayNum]
        
    }else{
        held=weekday[(dayNum%6)-1]
    }
    return held
}
//main
console.log(day.getDay());
console.log(getEventWeekday(2));




console.log("--------------------------------");