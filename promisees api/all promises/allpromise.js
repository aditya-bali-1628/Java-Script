console.log("this is promise !")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("this number is not supppring for you 1!");
    }
    else {
        setTimeout(() => {
            console.log("my name is adiya1")
            resolve("adiya1")
        }, 1000);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("this number is not supppring for you !");
    }
    else {
        setTimeout(() => {
            console.log("my name is adiya2")
            resolve("adiya2")
        }, 1000);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("this number is not supppring for you !");
    }
    else {
        setTimeout(() => {
            console.log("my name is adiya3")
            resolve("adiya3")
        }, 1000);
    }
})

p3 = Promise.all([prom1,prom2,prom3]);
p3.then((a) =>{
console.log(a)
}) .catch((err) =>{
   console.log(err);
})



