// getting started with node js
// > 1. What is node.js 
// > 2. installation
// > 3. Hello world
// > 4. Modules
// > 5. File Handling - read/write/update/delete
// > 6. How node works (yt)
// > 7. Building http server in nodejs - day-2


//? what 
//  Node.js is a runtime environment that lets you run JavaScript outside the browser and it provides APIs that let JavaScript interact with the system.
// It is mainly single-threaded at the JavaScript execution level.


// why nodejs
// How can JavaScript efficiently handle lots of I/O operations and network requests?


// step 1
// console.log("Hello World!");





// step 2
// both works in browser only
// console.log(windows);
// console.log(alert);

// window vs global object  
// Browser                    Node.js
// ────────                   ─────────
// window                     global
//   │                           │
//   ├── document                ├── process
//   ├── alert                   ├── setTimeout
//   ├── location                ├── console
//   └── etc.                    └── etc.

// Browser  → window
// Node.js  → global
// Universal → globalThis






// step 3
// modules - require ??
// ? separate JavaScript file containing code that you want to use somewhere else.

const maths = require("./math.js");

// console.log("the value of my module is ", math);
// output : the value of my module is  {}
// by this empty obj.?? {}

console.log("the value of my module is ", maths.addFunc(10,20) + " and " + maths.subFunc(20,10));


// module.exports vs exports 
// module.exports is the actual object that require() returns. exports is initially just a shortcut/reference to that object.


// Modules
//    ↓
// CommonJS
//    ├── require()
//    ├── module.exports
//    └── exports
//         ↓
// Built-in modules
//    ├── fs
//    ├── path
//    ├── events
//    └── http


//? JUMP to file.js