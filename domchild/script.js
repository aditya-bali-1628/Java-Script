// console.log("hello word")

// let boxes = document.getElementsByClassName("box1");
// console.log(boxes);
// boxes[3].style.backgroundColor = "red";

// document.getElementById("boxred").style.backgroundColor = "red"

// document.querySelector(".box1").style.backgroundColor = "red"

document.querySelectorAll(".box1").forEach(e =>{
    e.style.backgroundColor = "red"
})