async function returnpromise() {
   return new Promise ((resolve,reject) =>{
    setTimeout(() =>{
        resolve(45);
    },1000)
   })
}
 //iif function in javascript its invoked as posible as to much
 // it is use evoid globle namespace as async await etc..
(async function getime() {
    let a = await returnpromise();
    console.log(a);
    let b = await returnpromise();
    console.log(b);

    let arr = [1,2,3];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));
})()

// write a javascript code is distrucuring 
 let [x,y] = [1,3];
 console.log(x,y);

// in other uses in rest key word distrucuring
let [s,d, ...rest] = [1,2,5,6,7,8]; // ... mean spread opertor that v                                  // that mean open spreade the values
console.log(s,d,rest);