const fs = require("fs");
const crypto = require("crypto");
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 10;

fs.readFile("./practice.txt", "utf-8", ()=> {
    console.log("IO Polling");

    setTimeout(()=>console.log("Timeout 2"), 0);
    setImmediate(()=>console.log("Immediates 2"), 5*1000);

    crypto.pbkdf2("password1", "salt1", 100000, 1024, 'sha512', ()=> {
        console.log(`${Date.now() - start}ms  , password 1 done`)
    });

    crypto.pbkdf2("password2", "salt1", 100000, 1024, 'sha512', ()=> {
        console.log(`${Date.now() - start}ms  , password 2 done`)
    });

    crypto.pbkdf2("password3", "salt1", 100000, 1024, 'sha512', ()=> {
        console.log(`${Date.now() - start}ms  , password 3 done`)
    });

    crypto.pbkdf2("password4", "salt1", 100000, 1024, 'sha512', ()=> {
        console.log(`${Date.now() - start}ms  , password 4 done`);
    });

    crypto.pbkdf2("password5", "salt1", 100000, 1024, 'sha512', ()=> {
        console.log(`${Date.now() - start}ms  , password 5 done`);
    });

    
});

setTimeout(()=> {
    console.log("timeout 1");
}, 0);

setImmediate(()=> {
    console.log("immediate 1");
}, 0);



console.log("Top level 1");


// how promise callback works