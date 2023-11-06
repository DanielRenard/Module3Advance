// 2. The following delayMsg function is intended 
// to be used to delay printing a message until
// some time has passed.

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

// a) What order will the four tests below print in? Why?

// They'll print in this order, because the setTimeout() global function 
// takes parameters in milliseconds and will print accordingly.

// delayMsg('#4: Not delayed at all') //This message will be printed after a delay: #4: Not delayed at all
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); // This message will be printed after a delay: #3: Delayed by 0ms
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); // This message will be printed after a delay: #2: Delayed by 20ms
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); // This message will be printed after a delay: #1: Delayed by 100ms

// b) Rewrite delayMsg as an arrow function

// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// delayMsg('#4: Not delayed at all')

// c) Add a fifth test which uses a large delay time (greater than 10 seconds)

// const delayMsg = (msg) => {
//     console.log(`This message will be printed after a delay: ${msg}`)
// }

// // setTimeout(delayMsg, 10000, '#1: Delayed by 10s')

// d) Use clearTimeout to prevent the fifth test from printing at all.

clearTimeout(setTimeout(delayMsg, 10000, '#1: Delayed by 10s'))