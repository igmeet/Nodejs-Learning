// getting started with node js
// > 1. What is node.js 
// > 2. installation
// > 3. Hello world
// > 4. Modules
// > 5. File Handling
// > 6. How node works (google.com)
// > 7. Building http server in nodejs


// step 1
// console.log("Hello Workd!");



// step 2
// both works in browser only
// console.log(windows);
// console.log(alert);




// step 3
// modules - require ??
const maths = require("./math.js");

// console.log("the value of my module is ", math);
// output : the value of my module is  {}
// by this empty obj.?? {}

console.log("the value of my module is ", maths.addFunc(10,20) + " and " + maths.subFunc(20,10));
   


//? JUMP to file.js