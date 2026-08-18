// 3. streams in nodejs.
// Introduction
// Stream are not only for streaming videos/audios
// Understanding stream & buffer
// Downloading file in bad way and good way
// copy file in file system  in bad and good way
// create custom stream (readable, writable , transform)
// String processing in goood and bad way
// Pipes


const http = require("http");
const fs = require("fs");
const {Transform, pipeline} = require("stream");

const myServer = http.createServer((req,res)=> {

//* ---------------1.Downlaoding file------------------------------------

    // In bad way ❌
    // const file = fs.readFileSync("sample.txt", "utf-8");
    // res.end(file);


    // In good way - using streams ✅ 
    // const readableStream = fs.createReadStream("sample.txt");
    // readableStream.pipe(res); // Readable stream se data lekar writable stream me bhejte raho. // lhs me req, and rhs me res



//* ---------------2. Copy file on File System--------------------------
    // bad way ❌
    // const file = fs.readFileSync("sample.txt");
    // fs.writeFileSync("output.txt", file);
    // res.end();

    
    // goood way ✅
    // const readStream = fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt");

    // "data" is event name ---> mtlb jab data aa jaye tab usko callback function me bhej do (it run at every chunk of data available)
    // readStream.on("data", (chunk)=> {
        // console.log("CHUNKS : ", chunk)
        // writeStream.write(chunk)
    // })



    //*------------------3. creating Custom Streams-------------------------------------------
    // in customStream.js
    // Readable and Writable ✅



    //* --------------------4. String Processing ------------------------------------------------
    //? Goal : // uppercase sbko // doloremque --> Meet is Dev.

    // bad way ❌
    // const readStream = fs.createReadStream("sample.txt");
    // const writeStream = fs.createWriteStream("output.txt");

    // readStream.on("data", (chunk)=> {
    //     const modifiedWord = chunk.toString().toUpperCase().replaceAll(/ipsum/gi, "IG Meet");
    //     writeStream.write(modifiedWord);
    // })



    // good way ✅
    const readStream = fs.createReadStream("sample.txt");
    const writeStream = fs.createWriteStream("output.txt");
    const transformStream = new Transform({
        transform(chunk, encoding, callback){
            const modifiedWord = chunk.toString().toUpperCase().replaceAll(/doloremque/gi, "Meet is Dev.")
            callback(null, modifiedWord)
        }
    })

    readStream.pipe(transformStream).pipe(writeStream);
    // pipeline(readStream, transformStream, pipeline, (err)=> {
    //     console.log(err)
    // })

    res.end();
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



// Streams - Transferring heavy data from one end to another end in form of chunks
//? MAIN GOAL STREAMS : memory efficient + continuous processing + large data handle karna + backpressure handle karna


//? without stream - load whole file in server than to another file
// Data ----load into memory----> server memory (Data) -----copy to another file-------> Data 


//* with Streams - send data in chunks one to another end
// Data -----readable stream--------> buffer ------writable Stream-------> Data


// buffer - physical space available in memory
// 1 gb = 1024 mb


// writing streams
// 1. Readable
// 2. Writable
// 3. Transform etc.....


// req = readable stream
// res = writable stream


// transform - is both readable and writable 