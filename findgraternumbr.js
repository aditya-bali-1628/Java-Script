
let a = 55;
let b = 89;
if(a > b)
{
    console.log("a is grater  :",a);
}

else if(b > a)
{
    console.log("b is grater :",b)
}
else
{
    console.log("number is not valid");
}

let number = prompt("Enter a number:");
number = parseInt(number); // Convert the input to an integer
console.log("You entered:", number);
