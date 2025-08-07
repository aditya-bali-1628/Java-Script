// classes and object in js
class Animal {
    constructor(name1, name2) {  // constructor is use for initilized object when they are created in class
        this.name1 = name1;  //value initilizing
        this.name2 = name2;
        console.log(name1)

    }

    //create functions in class
    eats() {
        console.log("animal is eats")
    }
    jump() {
        console.log("animal jump kar raha hain")
    }
    run() {
        console.log("animal bhag raha hain")
    }
}
//create a new class
class lion extends Animal {   //use extends key word inhetrte the class animal..
    constructor(name1, name2) {
        super(name1, name2);

        //It allows you to access methods, properties, or constructors from the parent class 
        //that are overridden or shadowed by the subclass

        console.log("objetc is created and lion is  here")
    }

    eats() {
        super.eats();
        console.log("lion is eats and lion is roar");
    }


}

let a = new Animal("bunny", "dainosour");
console.log(a);


let l = new lion("shera", "sherni");
console.log(l);