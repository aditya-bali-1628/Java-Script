let mode = document.querySelector("#btn");
let currentmode = "light";

mode.addEventListener("click", () =>{
  if(currentmode === "light")
  {
    currentmode = "dark";
    document.querySelector("body").style.backgroundColor = "black"
    console.log("dark")

  }
  else{
    currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white"
        console.log(currentmode);
      console("light");
  }

});
