async function getdata() {
    //simulate getting data from server 
    //converting  fetch api to in ascyn function 
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
  
    return data;

}

async function main() {
    console.log("my name is aditya !");

    console.log("log modules");

    console.log("log data");
    let data = await getdata();
    console.log(data);
    console.log(" data modules")
    console.log("dikusha");

}

main();
