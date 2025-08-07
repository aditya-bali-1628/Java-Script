for (let i = 1; i <= 15; i++) {
    let inputNumber = prompt("Enter a number:");
    let num = parseInt(inputNumber);

  
    if (num % 2 == 0) {
        alert(num + " is even");
    } else {
        alert(num + " is odd");
    }
}

