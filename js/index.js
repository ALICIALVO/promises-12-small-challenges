// -----------------------------------------------------

// Challenge 1: Creating and Resolving a Promise:

// function makePromise(){
//    return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            resolve("Promise is resolved!");
//         }, 2000);
//     })
// }

// makePromise()
    // .then((msg) => {
//    console.log(msg);
// });
// -----------------------------------------------------


// Challenge 2: Promise Chaining::

// function doubleAfter2Seconds(x) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(x * 2);
//         }, 2000);
//     })
// }

// function addAsync(a, b) {
//     return doubleAfter2Seconds(a).then((doubleA) => {
//         return doubleAfter2Seconds(b).then((doubleB) => {
//             return doubleA + doubleB;
//         });
//     });
    
// }

// addAsync(2, 3)
// .then((sum) => {
// console.log(sum);
// });

// -----------------------------------------------------

// Challenge 3: Error Handling in Promises:

// function promiseWithError(){
//     return new Promise((resolve, reject) => {
//        setTimeout(() => {
//         reject("This is an error!");
//        }, 1000);
//     });
// }

// promiseWithError()
//     .then((msg)=> {
//     console.log(msg);
//     })
//     .catch((err) => {
//     console.log(err);
// });

// -----------------------------------------------------

// Challenge 4: Promise.all:

// function fetchAllData(promisesArray){
//     return Promise.all(promisesArray);
// }

// const promise1 =  new Promise((resolve, reject) => {
//             setTimeout(() => {
//                resolve("All Resolved Promises!");
//             }, 2000);
//         });

// const promise2 = Promise.resolve(10);

// fetchAllData([promise1, promise2]).then((data)=> {
//    console.log(data);
// });
// =====================================================

// function fetchAllData(promisesArray){
//     return Promise.all(promisesArray);
// }

// const promise1 =  new Promise((resolve, reject) => {
//             setTimeout(() => {
//                resolve("Promise is resolved!");
//             }, 2000);
//         });

// const promise2 = Promise.resolve(10);

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise is rejected!");
//     }, 1000);
// });

// fetchAllData([promise1, promise2, promise3]).then((data)=> {
//    console.log(data);
// })
//    .catch((err) => {
//     console.log(err);
// });
// =====================================================

// const arrPromise = ['promise1', 'promise2', 'promise3'];
// function fetchAllData(){
//    return new Promise((resolve, reject) => {
//         resolve(Promise.all(arrPromise));
//     });
   
// }

// fetchAllData().then((arr)=> {
//     console.log(arr);
// });

// -----------------------------------------------------

// Challenge 5: Async/Await with Try/Catch: *challenge 3 is missing

// async function asyncFunctionWithWithError(){
// try {
//     const result = await promiseWithError();
//     console.log(result);
// }catch (err){
// console.error(err);
// }
// }

// asyncFunctionWithWithError();

// -----------------------------------------------------

// Challenge 6: Promise.race:


// function racePromises(promisesArray){
//     return Promise.race(promisesArray);
// }


// // const promise1 = Promise.resolve(8);

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("constant of promise1 is not the first one.");
//     }, 2000);
// })

//     const promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("constant of prmoise2 will be the 1st one.")
//         }, 1000);
//     })

//     racePromises([promise1, promise2]).then((resultRace) => {
// console.log(resultRace);
// })
// .catch((err) => {
// console.log(err);
// });

// -----------------------------------------------------

// Challenge 7: Converting Callbacks to Promises:
// *promises meant to replace callbacks:

// mocked function:


// function getData(callback) {
//   setTimeout(() => {
//     const data = {
//         username: "loren",
//             email: "loren@example.com",
//             age: 30
//     };
//     callback(data);
//   }, 1000);
// }





// function getDataPromise() {
//     return new Promise((resolve, reject) => {
//         getData(
//             (data) => {
//                 resolve(data);
//             },
//             (error) => {
//                 reject(error);
//             }
//         );
//     });
// }


// getDataPromise()
//     .then((data) => {
//         console.log("Data retrieved successfully:", data); 
//     })
//     .catch((error) => {
//         console.log("Error retrieving data:", error);
//     });


// -----------------------------------------------------

// Challenge 8: Implement a wait function:

// function wait(ms){
//     return new Promise((resolve, reject) => {
        
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }

// wait(1000).then(() => {
// console.log("Promise wait resolved after 1 sec.");
// });

// -----------------------------------------------------

// Challenge 9: Implement an echo function:

// function echo(msg, ms){
// return new Promise((resolve, reject) => {
//     wait(ms).then(() => {
//         resolve(msg);
//     });
// });

// }

// echo("Promise echo resolved after 3 sec.", 3000).then((echoedMessage) => {
//  console.log(echoedMessage);
// });

// -----------------------------------------------------

// Challenge 10: Implementing a Simple Promise.all:

// function simplePromiseAll(promisesArray){
//  return new Promise((resolve, reject) => {
//     // initialize variables = keep track of resolvedPromises and results:
//     let resolvedPromises = 0;
//     let results = [];

//     // iterate over each promise in the promisesArray:
//     promisesArray.forEach((promise, index) => {
//         // convert each promise into a resolved Promise (if not already):
//         Promise.resolve(promise)
//         // handle the resolution of the promise:
//         .then(value => {
//             // handle the resolved value:
//             results[index] = value;
//             resolvedPromises++;
//             // if all promises resolved, resolve the Promise with results:
//             if(resolvedPromises === promisesArray.length) {
//                 resolve(results);
//             }
//         })
//         // handle rejection promise:
//         .catch(reject);
//     });
//  });
// }

//     const promise1 = Promise.resolve(8);

//     const promise2 = Promise.resolve(23);

// simplePromiseAll([promise1, promise2])
//     .then((arryNum) => {
//     console.log(arryNum);
// });


