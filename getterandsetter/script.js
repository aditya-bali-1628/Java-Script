
// code is setter and getter  using classs

class User {
    constructor(name) { //create constructor 
        this.name = name; //initilize the constructor
    }

    get name() {    //get function allows to get private property of 
        //when user name called then return name to the object
        return this._name;
    }

    set name(value) {
        if (value.length > 4) {              //set function besicaly use for 
            // set te value of the name to set user name
            console.log(" name is good !");
        }
        else {
            console.log("name is to short !")
        }
        this._name = value;
    }
}

let user = new User("adi");  //calling object  to set function for set the user name 
console.log(user.name);  //calling get function
//user.name = ""
user.name = "harry";
console.log(user);