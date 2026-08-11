// console.log(Object.getOwnPropertyNames(global));




// setTimeout(()=>{
//     console.log("Hello from global");
// }, 2000);  // it execute after given certain time.




// let count = 0;
// const Interval = setInterval(()=> {
//     console.log(`Interval Count : ${++count}`);
//     if(count === 4) {
//         clearInterval(Interval);
//     }
// }, 1000);




// const fs = require("fs");

// fs.writeFile("write.txt", "Hey this text from IgMEET", (err)=> {
//     console.log(err);
// })




// Tricky Interview Question 
// in our program we have global objects and these are console.log, setTimeout, setInterval, etc...
// so question is --> yeh joh module, exports, require wgera hai woh bhi global objects hai ?

// answer : No
// why 

// here concept of The module function executer comes
// the module function wrapper / module function executer
// Before a modules code is executed, Node js will wrap it with a function wrapper that looks like this following ;

// (function(exports, require, module, __filename, __dirname) {
//     // Module code actually lives in here.
// });





//? Node js under the hood kese kaam krta hai ?
// nodejs --> v8 + c++ and also with LibUV-Library (event loop + thread pool).
// console.log("Hello");
// what actually happend here that how we got "Hello" 

// index.js  ---> node index.js
//* it creates process known as NODE PROCESS. and Node js is single threaded

//* this process goes to MAIN THREAD 
// in MAIN THREAD we have :
// 1. Init Project
// 2. Top level code
// 3. Require Modules
// 4. Event callback register. ??


//* Starts Event Loop
// 1. Expired Timer Callbacks ??  1. setTimeout and 2. setInterval
// 2. IO Polling- Fs (success callbacks)  ?? 
// 3. setImmediate Callbacks  ??
// 4. close callbacks ?? 


//* checks after an event loop. is any task is pending
// isPending --> No - Exit
// isPending --> Yes - start again


//* but also one thing if we have cpu intensive work
// then it offload to thread pool
// in thread pool we have "4 THREAD" by default and 128 threads

// cpu intensive task are :
// fs
// crypto
// os
// compression


// this how output is shown
// const fs = require("fs");

// setImmediate(()=> {
//     console.log("Hello from 0");
// }, 0)

// setTimeout(()=> {
//     console.log("Hello from timeout 1");
// }, 0);

// console.log("Hello from 2");  // top level code
// Hello from 2
// Hello from timeout 1
// Hello from 0

 

// but comment console part then 
// const fs = require("fs");

// setImmediate(()=> {
//     console.log("Hello from 0");
// }, 0)

// setTimeout(()=> {
//     console.log("Hello from timeout 1");
// }, 0);

// Hello from 0
// Hello from timeout 1




// cpu intensive - password hashing.
let start = Date.now();

const crypto = require("crypto");


// by default 4 worker
crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker

crypto.pbkdf2("password-1", "salt1", 100000, 1024, "sha512", ()=> {

    console.log(`${Date.now() - start}ms Done`); // latest time - initial time ---> 6-1 = 5

}); // one worker