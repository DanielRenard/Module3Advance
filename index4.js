// 4. The Fibonacci sequence of numbers is a famous
// pattern where the next number in the sequence is
// the sum of the previous 2.e.g. 1, 1, 2, 3, 5, 8,
// 13, 21, 34, etc.

// a) Write a function printFibonacci() using setInterval
// that outputs a number in the Fibonacci sequence every second.

// function printFibonacci() {
//     var a = 1, b = 1, sum;
//     console.log(a)
//     console.log(b)
//     setInterval( () => { 
//         sum = a + b;
//         console.log(sum)
//         a = b;
//         b = sum;
//     }, 1000 )
// }

// //   printFibonacci()


// b) Write a new version printFibonacciTimeouts() that
// uses nested setTimeout calls to do the same thing

// function printFibonacci() {
//     var a = 1, b = 1, sum;
//     console.log(a)
//     console.log(b)
//     function nextFibonacci() {
//         sum = a + b;
//         console.log(sum)
//         a = b;
//         b = sum;
//         setTimeout( nextFibonacci, 1000)
//     }
//     setTimeout( nextFibonacci, 1000 )
// }

// printFibonacci()

// c) Extend one of the above functions to accept a limit
// argument, which tells it how many numbers to print before
// stopping.

function printFibonacci(end) {
    let a = 1, b = 1, sum, numPrinted = 0;
    console.log(a)
    numPrinted += 1
    if (numPrinted >= end) return
    console.log(b)
    numPrinted += 1
    if (numPrinted >= end) return
    function nextFibonacci() {
        sum = a + b;
        console.log(sum)
        numPrinted += 1
        if (numPrinted >= end) return
        a = b;
        b = sum;
        setTimeout( nextFibonacci, 1000)
    }
    setTimeout( nextFibonacci, 1000 )
}

printFibonacci(8)