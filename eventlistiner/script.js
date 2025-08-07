document.querySelector(".container").addEventListener("click",(e) =>{
    e.stopPropagation
    alert("container was click")
})

document.querySelector(".childcontaier").addEventListener("click",(e) =>{
    alert("childcontaier was click")
})


document.querySelector(".child").addEventListener("click",(e) =>{
    alert("child was click")
})


