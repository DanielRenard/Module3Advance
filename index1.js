// 1. makeCounter below is a decorator function 
// which creates and returns a function that 
// increments a counter.

// a) Create a second counter counter2 using the 
// makeCounter function and test to see if
// it remains independent to counter1

// function makeCounter() {
//     let currentCount = 0;
//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1(); // 1
// counter1(); // 2
// counter2(); // 1
// counter2(); // 2

// b) Modify makeCounter so that it takes an 
// argument startFrom specifying where the
// counter starts from (instead of always 
// starting from 0)

// function makeCounter() {
//     let startFrom = 5;
//     // let currentCount = 0; //don't need this
//     return function() {
//        currentCount = startFrom++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();

// counter1(); // 5
// counter1(); // 6
// counter1(); // 7
// counter1(); // 8

// // c) Modify makeCounter to take another 
// // argument incrementBy, which specifies how
// // much each call to counter() should increase
// // the counter value by.

function makeCounter() {
    let currentCount = 0;
    let incrementBy = 6
    return function() {
        currentCount += incrementBy;
        console.log(currentCount)
        return currentCount;
    };
}

let counter1 = makeCounter();

counter1(); // 6
counter1(); // 12
counter1(); // 18
counter1(); // 24
