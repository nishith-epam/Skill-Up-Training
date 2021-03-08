// Extends and implements is possible with interface

class Car {
    printCar = () => {
        console.log("this is my car")
    }
};

interface NewCar extends Car {
    name: string;
};

class NewestCar implements NewCar {
    name: "Car";
    constructor(engine: string) {
        //this.name = name
    }
    printCar = () => {
        console.log("this is my car")
    }
};