let mode = document.querySelector("#btn");
let body  = document.querySelector("body");
let currentmode = "light";

mode.addEventListener("click", () =>{
  if(currentmode === "light")
  {
    currentmode = "dark";
    //document.querySelector("body").style.backgroundColor = "black"
    body.classList.add("dark")
    body.classList.remove("light")
    console.log("dark")

  }
  else{
    currentmode = "light";
        //document.querySelector("body").style.backgroundColor = "white"
        body.classList.add("light")
        console.log(currentmode);
        body.classList.remove("dark")
      console("light");
  }

});
