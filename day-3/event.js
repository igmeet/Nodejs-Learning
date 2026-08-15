// 2. Events in nodejs
const EventEmitter = require("events"); // ?

const emitter = new EventEmitter(); // new ??



// emitter.on("GREET", ()=>{
//     console.log("Hello from events")
// })

// emitter.on("GREET", (username, id)=>{
//     console.log(`Hello World ${username} and id is ${id}`);
// })


// emitter.emit("GREET", "Meet", "1");

// above is not right way to take an argument

// why args.username
// why (args)


emitter.on("GREET", (args)=> {
    console.log(`Hello this is ${args.username} and id is : ${args.id}`);
}) // yaha backtick me object literal kyu why not in ""


emitter.emit("GREET", {
    username : "Meet",
    id : "12sdniaedofn57osnsodgdsfnaod24"
})