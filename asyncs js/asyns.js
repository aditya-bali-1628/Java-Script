

 async function getdata() {
    //simulate getting data from server 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        }, 3000)
    })
}

async function main()
{
console.log("my name is aditya !");

console.log("log modules");

    console.log("log data");
    let data =  await getdata();
    console.log(data);
    console.log(" data modules")
    console.log("dikusha");

}

main();

// data.then((v) =>{
//     console.log(data);
//     console.log(" data modules")
//     console.log("dikusha");
// })


