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


// async
// fs.readFile("./text.txt", "utf-8", (err,res)=> {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(res);
//     }
// });





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
// fs.unlink("./text.txt", (err,res)=> {
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(res);
//     }
// })



// practice
//* cpSync
//* mkdirSync
//* statSync
