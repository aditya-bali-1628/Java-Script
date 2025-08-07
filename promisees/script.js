console.log("this is promise !")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5)
    {
       reject("this number is not supppring for you !");
    }
    else{
    setTimeout(() => {
        console.log("my name is adiya")
        resolve("adiya")
    },3000);
}
})



prom1.then((a) =>{
    console.log(a);
})
.catch((err) =>{
    console.log(err);
})