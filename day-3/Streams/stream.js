// 3. streams in nodejs.
// Introduction
// Stream are not only for streaming videos/audios
// Understanding stream & buffer
// Downloading file in bad way and good way
// copy file in file system  in bad and good way
// create custom stream (readable, writable , transform)
// String processing in goood and bad way
// Pipes


//? MAIN GOAL STREAMS : memory efficient + continuous processing + large data handle karna + backpressure handle karna

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req,res)=> {

//* ---------------1.Downlaoding file-------------------------------

    // In bad way ❌
    // const file = fs.readFileSync("sample.txt", "utf-8");
    // res.end(file);


    // In good way - using streams ✅ 
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res); // Readable stream se data lekar writable stream me bhejte raho.


//* ---------------2. Copy file on File System---------------------
    // bad way ❌
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file);
    // res.end();

    
    // goood way ✅
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");

    readStream.on("data", (chunk)=> {
        // console.log("CHUNKS : ", chunk)
        writeStream.write(chunk)
    })

})

myServer.listen(3000, ()=> {
    console.log("Server is runnig on 3000");
})




// !backpressure eg : pipe()
//* Agar read stream continuously 100 chunks bhejti rahe, to jo 70 extra chunks hain unko kahin na kahin temporarily rakhna padega.

//* Warna memory bhar sakti hai.

//* Yahi backpressure hai

//* writeStream ke paas ek internal buffer hota hai.

//* So initially:

//* readStream
//    ↓
//* chunk
//    ↓
//* writeStream buffer
//    ↓
//* disk