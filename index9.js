// 9. We can delay execution of a function using setTimeout, where we need to provide both
// the callback function and the delay after which it should execute.

// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

//promise-based alternative
//delays execution at random b/w 1-20 sec
//returns promise via .then()

function randomDelay() {
  const seconds = function numberMinMax(min = 1000, max = 20000){
    const sec = Math.floor(Math.random() * (max - min +1)) + min;
    console.log(sec);
    return sec;
  }
  return new Promise((resolve) => {
    setTimeout(function () {
      // resolve the promise after 1s
      resolve();
    }, seconds());
  });
}

// randomDelay().then(() => console.log("There appears to have been a delay."));

// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it

function randomDelayB() {
  const sec = Math.floor(Math.random() * (2000 - 1000 +1)) + 1000;
  console.log(sec)
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // console.log(sec % 2)
// if sec % 2 then resolve else then reject
      if (sec % 2 === 0) {
        resolve() 
      } else { 
        reject()               
      }
    }, sec);
  });
}

// randomDelayB() 
// .then(() => console.log("There appears to have been a delay."))
// .catch(() => console.log('rejected odd number'))

// c) Update the testing code to catch rejected promises and print a different message

// d) Try to update the then and catch messages to include the random delay value

function randomDelayD() {
  const sec = Math.floor(Math.random() * (2000 - 1000 +1)) + 1000;
  console.log(sec)
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      // console.log(sec % 2)
// if sec % 2 then resolve else then reject
      if (sec % 2 === 0) {
        resolve(sec)
      } else { 
        reject(sec)           
      } 
    }, sec);
  });
}

randomDelayD() 
.then((response) => console.log("There appears to have been a delay of", response))
.catch((response) => console.log('rejected odd number', response))
