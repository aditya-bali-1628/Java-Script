 /* 
    settled mean resolve or reject 
    resolve mean when function settled successfully
    reject mean when function settled unseccesfully
 */

async function getdata() {
    //simulate getting data from server 
    //converting  fetch api to in ascyn function 
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

      let data = x.json();
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

