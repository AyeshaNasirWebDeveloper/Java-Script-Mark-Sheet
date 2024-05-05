// Mark Sheet

// Student Name
var studentName = "Ayesha Nasir";
console.log(studentName);

// SUbjects 
var totalSubjects = 3;
var subOne = "Cost Accounting";
var subTwo = "Advance Accounting";
var subThree = "Business Mathematics";
var subjects = subOne + subTwo + subThree;
console.log(subjects);

// Obtaining Marks 
var costAccounting = 90;
var advanceAccounting = 95;
var businessMathematics = 85;
var obtainingMarks = costAccounting + advanceAccounting + businessMathematics;
console.log(obtainingMarks);

// Total Marks
var totalMarks = 300;
console.log(totalMarks);

// Your Result Percentage
var result = obtainingMarks / totalMarks * 100; //90%
console.log(result);

// Your Grade 
var grade;

if (result >= 90) {
    grade = "A+";
} else if (result >= 80) {
    grade = "A";
} else if (result >= 70) {
    grade = "B";
} else if (result >= 60) {
    grade = "C";
} else if (result >= 50) {
    grade = "D";
} else {
    grade = "Fail";
}

console.log(`Hurray! Congratulations, ${studentName} your percentage is ${result}% and your Grade is ${grade}`);