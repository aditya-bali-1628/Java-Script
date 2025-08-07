
/*
 out put :
 Enter the name : aditya bali
 Enter the marks : 81.66
 grade : A 

*/

let name = prompt("Enter the name :");
let marks = prompt("Enter the marks :");


let Average = 0;

if (marks >= 80 && marks <= 100) {
    alert("grade is : A+");
}

else if (marks >= 70 && marks <= 80) {
    alert("grade is : A");
}

else if (marks >= 60 && marks <= 70) {
    alert("grade is : B+");
}
else if (marks >= 50 && marks <= 60) {
    alert("grade is : B");
}
else if (marks >= 35 && marks <= 50) {
    alert("grade is : c");
}
else {
    alert("FAIL");
}





