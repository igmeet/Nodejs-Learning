// console.log("Hello!");




// both works in browser only
// console.log(windows);
// console.log(alert);





// modules - require ??
const maths = require("./math.js");

// console.log("the value of my module is ", math);
// output : the value of my module is  {}
// by this empty obj.?? {}

console.log("the value of my module is ", maths.addFunc(10,20) + " and " + maths.subFunc(20,10));
   


//? JUMP to file.js