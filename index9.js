// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.

// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

//promise-based alternative
//delays execution at random b/w 1-20 sec
//returns promise via .then()

function randomDelay() {
  return new Promise((resolve) => {
    setTimeout(function () {
      // resolve the promise after 1s
      resolve();
    }, 1000);
  });
}

randomDelay().then(() => console.log("There appears to have been a delay."));

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

// c) Update the testing code to catch rejected promises and print a different message

// d) Try to update the then and catch messages to include the random delay value
