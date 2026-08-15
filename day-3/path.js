// 1. Path Module :
// ? A path tells your computer where a file or folder is located.


const path = require("path");

console.log("FILENAME", __filename); //complete path of current file.
console.log("DIRNAME", __dirname); //directory containing the current file.


// Eg : let say we are building a School Management system
// * folder/student/data.txt

// *  Join()
// folder/student/data.txt -> so join() do this

const filepath = path.join("folder", "student", "data.txt");

console.log(filepath);


const parsedDataPath = path.parse(filepath); // break the path into information
const resolvedPath = path.resolve(filepath); // absolute path
const extname = path.extname(filepath); // Get the extension
const basename = path.basename(filepath); // Get the file name
const dirname = path.dirname(filepath); // Get the folder


console.log({
    parsedDataPath,
    resolvedPath,
    extname,
    basename,
    dirname
});