// step 1

// > 1. http module - day - 2 index.js
// > 2. global objects - main.js
// > 3. module function executer - main.js
// > 4. how node js works let see its advance version... (google.com)



// creating http server 
// const http = require("http");
// const PORT = 8080;
// const fs = require("fs");


// const myServer = http.createServer((req,res)=> {
//     // request handler {...}
//     // writing request to log file
//     const Log = `${Date.now()} : ${req.url}  New Request Recieved \n`;
    
//     fs.appendFile("log.txt", Log, (err)=> {
//         if(err) {
//             console.error("The error occur in log file : ", err);
//             res.statusCode = 500;
//             res.end("Internal server error");
//             return; 
//         }
//         res.end("hello from server");
//     });

//     // console.log(req);
// });


// myServer.listen(PORT, ()=> {
//     console.log(`Server is running on : ${PORT}`);
// });



// when you run
// node index.js

// this happens :
// Node.js
//    ↓
// http.createServer(...)
//    ↓
// Server object created
//    ↓
// myServer.listen(8080)
//    ↓
// Server starts listening



// createServer() creates an HTTP server.
// The function you pass to it:

// (req, res) => {}

// gets executed every time a request arrives.





//! req is a Readable Stream.

// req.url : /about
// req.method : GET
// req.headers : user-agent

// are information coming from the client.



// status codes
// 200 → OK
// 201 → Created
// 400 → Bad Request
// 401 → Unauthorized
// 403 → Forbidden
// 404 → Not Found
// 500 → Internal Server Error


// code
// res.statusCode = 500;
// res.end("Internal server error");


// means :
// HTTP Status: 500
// Body: Internal server error



// thats a routing concept and express for more powerfull routing/middleware API's

// const http = require("http");

// const myServer = http.createServer((req,res)=> {
//     if(req.url == "/"){
//         res.end("Home Page");
//     }
//     else if(req.url == "/about") {
//         res.end("About Page");
//     }
//     else if(req.url == "/users") {
//         res.end("User page");
//     }
//     else {
//         res.statusCode = 404;
//         res.end("Page Not Found");
//     }
// });

// myServer.listen(3000, ()=> {
//         console.log("Server is running on PORT : 3000");
// });