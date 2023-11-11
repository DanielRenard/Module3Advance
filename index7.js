// 7. In JavaScript, the toString method is used to convert an object to a string representation.
// By default, when an object is converted to a String, it returns a string that looks something
// like [object Object].
// However, we can define our own toString methods for custom objects to provide a more
// meaningful string representation.

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.toString = () => {
    return `${this.name}, ${this.age}, ${this.gender}`
    }
}

const person1 = new Person("James Brown", 73, "male");

// Person.prototype.toString = function() {
//     return `${this.name} is a ${this.age} ${this.gender}`
//     }

console.log("person1: " + person1); //prints person1: [object Object]

// a) Define a custom toString method for the Person object that will format and print
// their details

//person1: James Brown, 73, male

// b) Test your method by creating 2 different people using the below constructor function
// and printing them

const person2 = new Person("Tim Brown", 20, "male");
const person3 = new Person("Bill Brown", 16, "female");
console.log("person2: " + person2)
console.log("person3: " + person3)

// c) Create a new constructor function Student that 
// uses call to inherit from Person and
// add an extra property cohort

function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender)
    this.cohort = cohort
    this.toString = () => {
        return `${this.name}, ${this.age}, ${this.gender}, ${this.cohort}`
        }
    // Object.setPrototypeOf(Person) 
}

// Student.prototype = Person

const newStudent = new Student("Will Hix", 63, "male", 2007)

console.log("person4: " + newStudent)

// d) Add a custom toString for Student objects that 
// formats and prints their details. Test
// with 2 students.

const newStudent2 = new Student("Wick Hick", 147, "intersex", 1807)

console.log("person4: " + newStudent2)

const newStudent3 = new Student("Rill Bix", 43, "male", 1907)

console.log("person4: " + newStudent3)
