//? step 5

// Node.js ka built-in module hai jo tumhe operating system ke files/folders ke saath kaam karne deta hai.

const fs = require("fs"); 


// write
// read
// update
// delete



// async: Non blocking and sync : blocking



//* write file
// sync
// fs.writeFileSync("./text.txt", "Hey world this is sync writing file ");


// async 
// fs.writeFile("./text.txt", "Hey world this is async", (err)=> {
//     console.log(err);
// });




//* read File
// sync
// const res = fs.readFileSync("./text.txt", "utf-8");
// console.log(res);

// readFileSync() result return karta hai.

// That's why :
// const data = ...


// async
// fs.readFile("./text.txt", "utf-8", (err,res)=> {
//     if(err) {
//         console.log(err);
//         return;
//     }
//      console.log(res);
// });

// Yahan result directly return nahi hota.
// Result callback ke through milta hai.



// * update file / appendFile
// sync
// fs.appendFileSync("./text.txt", new Date().toDateString());


// async
// fs.appendFile("./log.txt", `Hey this is async append ${new Date().toDateString()}\n`, (err,res)=> {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log(res);
//     }
// });




//* delete / unlinkFile
// sync
// fs.unlinkSync("./text.txt");

// async
// fs.unlink("./text.txt", (err)=> {
//     if(err){
//         console.log(err);
//         return; 
//     }
//     console.log("file deleted");
// });



//? practice
//* cpSync
// fs.cpSync("./log.txt", "./copy.txt");



//* mkdirSync
// fs.mkdirSync("./data"); // make folder

// Nested folder :
// fs.mkdirSync("./data/users", { recursive: true });
// Without recursive: true, parent data doesn't exist to begin with, so nested creation can fail.


//* statSync  
// information about file/folder
// const stats = fs.statSync("./text.txt");

// console.log(stats);


// You can check :

// console.log(stats.isFile());
// console.log(stats.isDirectory());
// console.log(stats.size);


// For example:

// isFile()       → true
// isDirectory()  → false
// size           → file size in bytes


// async - non-blocking I/O - does'nt block I/O. it handles other request and get callback of successfully completion of that tasks
// sync - blocking I/O - it blocks the request and wait for execution.