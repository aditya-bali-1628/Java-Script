  let obj = {
    a: 1,
    b :2,
    c:3
 }

 let {a,b} = obj;
 console.log(a,b);


 function sum(x,y,z)
 {
   return x+y+z;
 }
 let arr = [1,2,3];
 console.log(sum(arr[0],arr[1],arr[2]));
 console.log(sum(...arr));