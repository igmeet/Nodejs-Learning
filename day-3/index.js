// todo
// 1. Path Module :

// const path = require("path");

// console.log("FILENAME", __filename);
// console.log("DIRNAME", __dirname);


// School Management system
//* folder/student/data.txt

//*  Join()

// const filepath = path.join("folder", "student", "data.txt");

// console.log(filepath);


// const parsedDataPath = path.parse(filepath); 
// const resolvedPath = path.resolve(filepath); // absolute path
// const extname = path.extname(filepath);
// const basename = path.basename(filepath);
// const dirname = path.dirname(filepath);


// console.log({
//     parsedDataPath,
//     resolvedPath,
//     extname,
//     basename,
//     dirname
// });







// 2. Events in nodejs

const EventEmitter = require("events");

const emitter = new EventEmitter(); // new ??

// keymethods :

// on(eventName, Listener) --- create
emitter.on("GREET", ()=>{
    console.log("Hello from events")
})

// emit(eventName, [args]) --- execute 
emitter.emit("GREET");









// 3. streams in nodejs.























