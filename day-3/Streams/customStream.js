const {Readable, Writable} = require("stream"); // Readable class // Writable class
 
const readableStream = new Readable(
    {
        highWaterMark : 6,  // Ye ek buffer threshold hai jo stream ke flow ko control karne me use hota hai.
        read(){} //Jab stream ko data chahiye ho, tab data kahan se lana hai?
    }
);

const writableStream = new Writable(
    {
        write(streamData){
            console.log("Writing...", streamData.toString());
        }
    }
)

readableStream.on("data", (chunk)=> {
    console.log("CHUNKS: ", chunk.toString());
    writableStream.write(chunk)
});


// "Readable stream ke buffer me data provide karo."
console.log(readableStream.push("Hello"));