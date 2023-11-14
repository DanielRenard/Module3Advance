// 6. Use the Function prototype to add a new delay(ms) 
// function to all functions, which can be used to 
// delay the call to that function by ms milliseconds.

Function.prototype.delay = function(ms) {
    // console.log(this.value)
    let originalFunction = this
    return function(argument1, argument2) {
        setTimeout(originalFunction, ms, argument1, argument2)
        //function, delay, any additional arguements
    }
}

function multiply(a, b) {
    console.log( a * b );
}

multiply.delay(3000)(5, 5); // prints 25 after 3000 milliseconds

// Function.prototype.delay = function(//any arguments here){
//   //connect the context here
//   return //what does a function decorator return?  //what arguments should you pass to it?
// }

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters



// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters

Function.prototype.delayPartB = function(ms) {
    // console.log(this.value)
    let originalFunction = this
    return function() {
        setTimeout( ()=> originalFunction.apply(this, arguments), ms)
        //function, delay, any additional arguements
    }
}

function multiplyB(a, b, c, d) {
    console.log( a * b * c * d);
}

multiplyB.delayPartB(3000)(5, 5, 5, 5)

// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.


