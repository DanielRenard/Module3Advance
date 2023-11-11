// 6. Use the Function prototype to add a new delay(ms) 
// function to all functions, which can be used to 
// delay the call to that function by ms milliseconds.

Function.prototype.delay = function(ms) {
    // console.log(this.value)
    // return setTimeout(this, ms)
//    setTimeout((() => { 
//         return this       
//     }).bind(this), ms);

}

function multiply(a, b) {
    console.log( a * b );
}

multiply.delay(1000)(5, 5); // prints 25 after 500 milliseconds

// Function.prototype.delay = function(//any arguments here){
//   //connect the context here
//   return //what does a function decorator return?  //what arguments should you pass to it?
// }

// a) Use the example multiply function below to test it with, as above, and assume that all
// delayed functions will take two parameters



// b) Use apply to improve your solution so that delayed functions can take any number of
// parameters



// c) Modify multiply to take 4 parameters and multiply all of them, and test that your
// delay prototype function still works.


