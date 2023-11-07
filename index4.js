// 4. The Fibonacci sequence of numbers is a famous
// pattern where the next number in the sequence is
// the sum of the previous 2.e.g. 1, 1, 2, 3, 5, 8,
// 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval
// that outputs a number in the Fibonacci sequence every second.


function printFibonacci() {
    let num = 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num2;
}


// function printFibonacci() {
//   let a = 0;
//   let b = 1;
//   let c;
//   for (i = 0; i < 3; i++) {
//     c = a + b;
//     console.log(c);
//     a = b + c;
//     console.log(a);
//     b = c + a;
//     console.log(b);
//   }
// }

console.log(printFibonacci())

// b) Write a new version printFibonacciTimeouts() that
// uses nested setTimeout calls to do the same thing



// c) Extend one of the above functions to accept a limit
// argument, which tells it how many numbers to print before
// stopping.


