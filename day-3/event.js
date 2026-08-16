//? object
// const user = {
//     name : "MEET",
//     isAdmin : true
// };



//? constructor = special method for defining the properties and methods of objects
// constructor is start with  capital
// function Car(model, year, fuel, engine) {
//     this.model = model,
//     this.year = year,
//     this.fuel = fuel,
//     this.engine = engine,
//     this.drive = `you will drive ${this.model}`
// }


//? object ka instance 
// passing argument in order
// const car1 = new Car("BMW", "2026", "Electric", "High-end");

// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.fuel);
// console.log(car1.engine);
// console.log(car1.drive);





// Events in node js
// something happend for eg : button click -> something happend -> server

const EventEmitter = require("events");

// instance of obj
const emitter = new EventEmitter();



// register an event
// params(eventName, callback function)
// emitter.on("GREET", ()=> {
//     console.log("Hello World");
// });

// it listen the event 
// emitter.emit("GREET");




// now let passs with args.
emitter.on("GREET", (args)=> {
    console.log(`Hello, Myself ${args.username} and my id is : ${args.id}`)
});

emitter.emit("GREET", {
    username : "MEET",
    id : "2414nk3nnkknf12mon"
});




