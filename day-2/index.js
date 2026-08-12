// step 1

// > 1. http module - day - 2 index.js
// > 2. global objects - main.js
// > 3. module function executer - main.js
// > 4. how node js works let see its advance version... (google.com)



// creating http server 
const http = require("http");
const PORT = 8080;
const fs = require("fs");


const myServer = http.createServer((req,res)=> {
    // create a log file
    const Log = `${Date.now()} : & ${req.url}  New Request Recieved \n`;
    fs.appendFile("log.txt", Log, (err)=> {
        if(err) {
            console.error("The error occur in log file : ", err);
            res.statusCode = 500;
            res.end("Internal server error");
            return; 
        }
        res.end("hello from server");
    });

    // console.log(req);
});


myServer.listen(PORT, ()=> {
    console.log(`Server is running on : ${PORT}`);
});




