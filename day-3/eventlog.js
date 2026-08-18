
// assignment
// Objective
// Listen for multiple types of  user event (eg login, logout, purchase, and profile update)
// track how many times each event is emitted
// logs summary of all events occurencies when a  sppecial summary  event is triggered


// requuirement
// create at least four custom event
// emit these event multiple times with different arguments (eg username, item purchased)
// tracks and store the count of each event type 
// define a summary events that logs a  detailed report of how many times each event was triggered



const EventEmitter = require("events");

const userEmitter = new EventEmitter();

const fs = require("fs");


// event emitted counter
const eventCounter = {
    login : 0,
    logout : 0,
    purchase : 0,
    profileupdate : 0
}

let LogFile = "eventlog.json";

if(fs.existsSync(LogFile)){
    const data = fs.readFileSync(LogFile, "utf-8");
    // eventCounter - target obj and type to copy that data to eventCounter so data - Source obj.
    Object.assign(eventCounter, JSON.parse(data));
}


function savecount() {
    fs.writeFileSync(LogFile, JSON.stringify(eventCounter, null, 2))
}

userEmitter.on("LOGIN",(username)=> {
    eventCounter.login++;
    console.log(`You Logged In : ${username}`);
    savecount()
});

userEmitter.on("LOGOUT",(username)=> {
    console.log(`You Logged out : ${username}`);
    eventCounter.logout++;
    savecount()
});

userEmitter.on("PURCHASE",(username, item)=> {
    console.log(`You purchased : ${username} and item is ${item}`);
    eventCounter.purchase++;
    savecount()
});

userEmitter.on("PROFILE_UPDATE",(username, field)=> {
    console.log(`Profile : ${username} and Updated a field : ${field}`);
    eventCounter.profileupdate++; 
    savecount()
});


// summary of events
userEmitter.on("SUMMARY", ()=> {
    console.log("\n Event Summary :");
    console.log(`Logins : ${eventCounter.login}`);
    console.log(`Logouts : ${eventCounter.logout}`);
    console.log(`Purchases : ${eventCounter.purchase}`);
    console.log(`Profile Updates : ${eventCounter.profileupdate}`);

})


userEmitter.emit("LOGIN", "MEET");
userEmitter.emit("LOGOUT", "MEET");
userEmitter.emit("PURCHASE", "MEET", "Mobile");
userEmitter.emit("PROFILE_UPDATE", "MEET", "Pic");

userEmitter.emit("SUMMARY");


