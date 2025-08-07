
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
let number = prompt("Enter the number :");
alert(factorial(number)); // Output: 120
