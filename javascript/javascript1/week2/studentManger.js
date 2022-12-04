//stutent manager
console.log("Student Manager");
const class07Students = [];
let getPerson = function(name){
  let isFind=false
  for (let i = 0; i < class07Students.length; i++) {
    if (class07Students[i]===name) {
       isFind=true
    }else isFind=false //or we can use class07Students.includes
  
  }
  return isFind
}
function addStudentToClass(studentName) {
  let numOfStudent=getNumberOfStudents()
  if (studentName)
    { if (getPerson()==false){
          if ((numOfStudent<6)&&(class07Students.element!==studentName)){
             class07Students.push(studentName)
             } else  if ((numOfStudent>=6)&&(studentName==="Queen")){
                              class07Students.push(studentName);
                              return console.log(`Queen name `);
               } else return  console.log(`Cannot add more students to class 07 because we have 6 students  in class`);
    

}
} else  return console.log(` The name is NOT "", undefined, null, 0, false, NaN`);
}
function getNumberOfStudents() {
  return class07Students.length
}
//Main
console.log(`the length of the list is ${getNumberOfStudents()}`);
addStudentToClass("kofko popo");
addStudentToClass("kfodko popo");
addStudentToClass("kffoko popo");
addStudentToClass("koffdko popo");
addStudentToClass("koko popo");
addStudentToClass("koko popo");
addStudentToClass("koko popo");
console.log(`the length of the list is ${getNumberOfStudents()}`);
addStudentToClass("Queen");
addStudentToClass("");



console.log("--------------------------------");






















/*
//stutent manager
console.log("Student Manager");
const class07Students = [];
function addStudentToClass(studentName) {
    class07Students.push(studentName)
}

function getNumberOfStudents() {
  return class07Students.length
}
addStudentToClass("koko popo");
console.log(`the length of the list is ${getNumberOfStudents()}`);
console.log("--------------------------------");


//stutent manager
console.log("Student Manager");
const class07Students = [];
function addStudentToClass(studentName) {
  let numOfStudent=getNumberOfStudents()
  if (numOfStudent<6) {
    class07Students.push(studentName)
  }else return  console.log("Cannot add more students to class 07");
    
}

function getNumberOfStudents() {
  return class07Students.length
}
//Main
console.log(`the length of the list is ${getNumberOfStudents()}`);
addStudentToClass("koko popo");
addStudentToClass("koko popo");
addStudentToClass("koko popo");
addStudentToClass("koko popo");

addStudentToClass("koko popo");
addStudentToClass("koko popo");
addStudentToClass("koko popo");
console.log(`the length of the list is ${getNumberOfStudents()}`);
addStudentToClass("koko popo");

console.log("--------------------------------");
*/