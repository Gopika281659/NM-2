var studentName = "Aman";
var rollNo = 12345;
var email = "aman@example.com";
var physics = 65;
var biology = 75;
var english = 85;

var totalMarks = physics + biology + english;
var percentage = (totalMarks / 300) * 100;

console.log("Student Name: " + studentName);
console.log("Roll Number: " + rollNo);
console.log("Email: " + email);
console.log("Physics Marks: " + physics);
console.log("Biology Marks: " + biology);
console.log("English Marks: " + english);
console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");


var x = 50;
var y = 25;
var z = x++;
y = --z;
console.log("x: " + x);
console.log("y: " + y);
console.log("z: " + z);


var marks = 85;
if (marks >= 75) {
    console.log("Grade: Distinction");
} else if (marks >= 60) {
    console.log("Grade: First Class");
} else {
    console.log("Grade: Needs Improvement");
}


function greetStudent(name) {
    console.log("Welcome, " + name + "! Keep learning.");
}
greetStudent("Aman");


const colors = ["red", "green", "blue"];
console.log(colors);        
console.log(colors[2]);     

colors[0] = "purple";       
colors.push("yellow");      
colors.unshift("orange");  
colors.pop();               
colors.shift();             

for (let color of colors) {
    console.log("Color: " + color);
}

