//running call back function in javascript 
//using events

const callback = (arg) => {
    console.log(arg);
}
const loadscript = (src, callback) => {
        let sc = document.createElement("index.js");
        sc.src = src;
        sc.onload = callback("my name is aditya");
        document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-actionscript.min.js",callback)