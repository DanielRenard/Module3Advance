// 5. The following car object has several properties 
// and a method which uses them to print a description. 
// When calling the function normally this works as 
// expected, but using it from within setTimeout fails. 
// Why?

//setTimeout is running the description function in a context outside of the car object.

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//         console.log(this)
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };
// car.description(); //works
// setTimeout(car.description, 200); //fails

// a) Fix the setTimeout call by wrapping the call to car.description() inside a
// function

// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };

// car.description();
// setTimeout( () => {car.description()}, 1000);

// b) Change the year for the car by creating a clone of the original and overriding it

// let newCar = Object.create(
//     Object.getPrototypeOf(car),
//     Object.getOwnPropertyDescriptors(car)
// )

// newCar.year = 1889

// c) Does the delayed description() call use the original values or the new values from
// b)? Why?

//Uses the original values because we created a deep clone of the original car object.

// d) Use bind to fix the description method so that it can be called from within
// setTimeout without a wrapper function

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description();
setTimeout(car.description.bind(car), 1000);

// e) Change another property of the car by creating a clone and overriding it, and test that
// setTimeout still uses the bound value from d)

let newCar2 = Object.create(
    Object.getPrototypeOf(car),
    Object.getOwnPropertyDescriptors(car)
)

newCar2.year = 1865