const os = require("os");

// 1gb = 1024 mb

//* 1. get os platform info
console.log(os.platform());

//* 2. get os user info
console.log(os.userInfo());

//* 3. get the as cpu core info
console.log("cpu core info", os.cpus());
console.log(os.cpus().length);

//* 4. get the free memory in bytes
console.log(os.freemem(), "bytes");

//* 5 get the os cpu architecture
console.log('cpu architecture', os.arch()); 

//* 6 get the total memory of the system
console.log(os.totalmem(), "bytes");

//* 7  get the home directory of the user
console.log(os.homedir());

//* 8 get the network interfaces of the system
console.log(os.networkInterfaces()); 

//* 9 get the os release info
console.log(os.release()); 

//* 10  get the host name
console.log(os.hostname());

//* 11  get the os temp directory
console.log(os.tmpdir());

//* 12   os version
console.log(os.version()); 