// todo
// 1. Path Module :

const path = require("path");

// console.log("FILENAME", __filename);
// console.log("DIRNAME", __dirname);


// School Management system
//* folder/student/data.txt


//* 1. Join()

const filepath = path.join("folder", "student", "data.txt");

console.log(filepath);


const parsedDataPath = path.parse(filepath);
const resolvedPath = path.resolve(filepath); // absolute path
const extname = path.extname(filepath);
const basename = path.basename(filepath);
const dirname = path.dirname(filepath);


console.log({
    parsedDataPath,
    resolvedPath,
    extname,
    basename,
    dirname
});

















// 2. events in nodejs
// 3. streams in nodejs.