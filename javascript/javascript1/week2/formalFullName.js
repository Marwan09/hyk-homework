
// Flight booking fullname function
function getFullname(fName,lName) {
    return (`The full name is ${fName} ${lName}`)
    
}
let fistName = prompt("Please enter your first name");
let lastName = prompt("Please enter your last name");
console.log(getFullname(fistName,lastName));
const fullName1=getFullname("Roro","yoyo");
const fullName2=getFullname("Koko","jojo");
console.log(fullName1);
console.log(fullName2);
console.log("--------------------------------");

//Formal Full Name
function getFullName(fName="Elon",lName="Mask",check=true) {
    let formalName;
    if (check) {
        formalName=`Lord ${fName} ${lName}`;
    }else 
        formalName=` ${fName} ${lName}`;
    return formalName
}
const fullName3=getFullName("Roro","yoyo",true);
const fullName4=getFullName("Koko","jojo",false);
console.log(fullName3);
console.log(fullName4);
console.log(getFullName());
console.log("--------------------------------");
////Formal Full Name with Female |"Lady title"
function getFullNameWithfemale(fName="Elon",lName="Mask",check=true,female=false) {
    let formalName;
    if (check) {
        formalName=`Lord ${fName} ${lName}`;
    }else if (check===false && female===true) {
        formalName=`Lady  ${fName} ${lName}`;
    }
    else 
        formalName=` ${fName} ${lName}`;
    return formalName
}
const fullName5=getFullNameWithfemale("Qoqo","zozo",true,false);
const fullName6=getFullNameWithfemale("Roro","lolo",false,true);
const fullName7=getFullNameWithfemale("Dodo","lolo",false,false);
console.log(fullName5);
console.log(fullName6);
console.log(fullName7);
console.log(getFullName());
console.log("--------------------------------");
