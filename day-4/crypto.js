const crypto = require("crypto");


// 1. randomBytes()
const randomValue = crypto.randomBytes(8);
console.log(randomValue.toString("hex"));
// hex -> size * 2



// 2. createHash()
const hashValue = crypto.createHash("sha256").update("Meet").digest("hex");

const inputValue = "Meet"
const matchValue = crypto.createHash("sha256").update(inputValue).digest("hex");

if(hashValue === matchValue) {
    console.log("you can login");
}else {
    console.log("Something went wrong")
}