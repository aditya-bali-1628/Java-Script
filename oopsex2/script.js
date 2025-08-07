class vehical{
    constructor(carName,Carcolor,Carmodel,Carwheel,year)
    {
        this.carName = carName;
        this.Carcolor = Carcolor;
        this.Carmodel = Carmodel;
        this.Carwheel = Carwheel;    
        this.year = year;  
    }
    displayDetail()
    {
        console.log(`car Name  : ${this.carName}`)
        console.log(`Car color :${this.Carcolor}`)
        console.log(`Car model :${this.Carmodel}`)
        console.log(`Car wheels :${this.Carwheel}`)
        console.log(`launch in year :${this.year}`)
    }
}

class car extends vehical{
    constructor(carName,Carcolor,Carmodel,Carwheel,year,doors)
    {
        super(carName,Carcolor,Carmodel,Carwheel,year,doors);
        this.doors = doors;
        
    }
          displayDetail(){
            super.displayDetail();
            console.log(`doors : ${this.doors}`);
          }
}

let vehicals = new vehical("BMW200","Black","F-300","4 wheelar","2024");
   vehicals.displayDetail();

   let cars = new car("Farari","red","speed edition","4 wheelar","1998","two");
    cars.displayDetail();
