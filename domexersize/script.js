document.addEventListener('DOMContentLoaded', function() {
    
    console.log("script.js initializing");

    let boxes = document.querySelector(".container").children;

    // Function to generate random color
    function getRandomColor() {
        let val1 = Math.ceil(Math.random() * 255); // Using full range 0-255
        let val2 = Math.ceil(Math.random() * 255);
        let val3 = Math.ceil(Math.random() * 255);
        return `rgb(${val1},${val2},${val3})`;
    }

    // Apply random background and text color to each box
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getRandomColor();
        e.style.color = getRandomColor();
    });
});
