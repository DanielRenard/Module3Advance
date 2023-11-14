// 10.Fetch is a browser-based function to send a request and receive a response from a server,
// which uses promises to handle the asynchronous response.
// The below fetchURLData uses fetch to check the response for a successful status
// code, and returns a promise containing the JSON sent by the remote server if successful
// or an error if it failed. (To run this code in a node.js environment, follow the instructions in
// the comments before the function.) 

// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// function fetchURLData(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }
// fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data)) //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//   .catch((error) => console.error(error.message));


// a) Write a new version of this function using async/await

async function fetchURLData2(url) {
  const response = await fetch(url);
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

fetchURLData2("https://jsonplaceholder.typicode.com/todos/1")
.then((data) => console.log(data)) //{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
  .catch((error) => console.error(error.message));

// b) Test both functions with valid and invalid URLs

// import fetch from "node-fetch";
// globalThis.fetch = fetch;
// function fetchURLData3(url) {
//   let fetchPromise = fetch(url).then((response) => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   });
//   return fetchPromise;
// }
// fetchURLData3('google.com')
//   .then((data) => console.log(data)) //Invalid URL
//   .catch((error) => console.error(error.message));

//   async function fetchURLData4(url) {
//     const response = await fetch(url);
//     let fetchPromise = fetch(url).then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error(`Request failed with status ${response.status}`);
//       }
//     });
//     return fetchPromise;
//   }
  
//   fetchURLData4('facebook.com') //Invalid URL
//   .then((data) => console.log(data)) 
//     .catch((error) => console.error(error.message));

// c) (Extension) Extend your new function to accept an array of URLs and fetch all of them,
// using Promise.all to combine the results.


async function fetchURLData4(url1, url2) {
  const [fetch1, fetch2] = await Promise.all([
    fetch(url1),
    fetch(url2)
  ]);

  const one = await fetch1.json();
  const two = await fetch2.json();

  return [one, two];
}

// fetchURLData4().then((['https://jsonplaceholder.typicode.com/todos/2', "https://jsonplaceholder.typicode.com/todos/1"])) => { movies; categories;}).catch(error => {});

fetchURLData4(['https://jsonplaceholder.typicode.com/todos/2', "https://jsonplaceholder.typicode.com/todos/1"]) 
.then((data) => console.log(data)) 
  .catch((error) => console.error(error.message));