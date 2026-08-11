# Node.js

# Day - 1 - app.js
> 1. What is node.js 
> 2. installation
> 3. Hello world
> 4. Modules
> 5. File Handling
> 6. How node works
> 7. Building http server in nodejs





__1. What is Node.js?__

Better definition :✅
> Node.js is a JavaScript runtime environment that allows us to run JavaScript outside the browser.


_Normally:_
JavaScript → Browser → V8 Engine


With Node:
JavaScript → Node.js → V8 Engine + Node APIs → OS


Ryan Dahl's basic idea was essentially to take Google's V8 JavaScript engine and build a runtime around it using C/C++ components.





__2. Why Node.js?__

> JavaScript can run outside browsers now because runtimes such as Node.js, Deno, and Bun exist.

Historically, though, JavaScript was primarily associated with browsers.


Node.js lets us use JS for things like :

Web servers
APIs
CLI applications
File operations
Database applications
Real-time applications




__3. Browser vs Node__

This is important.

In browser:
console.log(window);

✅ window exists because the browser provides the window object.



In Node:
console.log(window);

❌ window is not defined.


Why?
Because Node isn't a browser.


Node provides its own environment/APIs:

Browser:
window
document
localStorage
DOM

Node:
process
fs
http
path
Buffer



That's why this is a useful distinction :
JavaScript is the language. Node.js is a runtime that provides an environment and APIs for running JavaScript outside the browser.




__4. HELLO WORLD__
console.log("Hello World!");



__5. Modules__ 

Your note:
Used to import modules, JSON, and local files


This needs a little correction.


A module is basically a separate piece of code that can be imported/reused.


In CommonJS:
const fs = require("fs");


Here : 

require("fs")
     ↓
load the fs module
     ↓
store it in fs


You can have :

Built-in module
const fs = require("fs");

Your own module
const notes = require("./note.js");

Installed package
const express = require("express");


So remember:

require()
   ↓
get something from another module




__6. Node.js Architecture__

You said:

understood how node from event queue to blocking and non blocking operation how they responds

Good. 👍

But don't just memorize the diagram.

You should be able to explain something like:

const fs = require("fs");

console.log("1");

fs.readFile("notes.txt", "utf8", (err, data) => {
    console.log("2");
});

console.log("3");

You should understand why:

1
3
2

happens.

The important mental model is:

JavaScript
   ↓
Call Stack
   ↓
Node APIs / OS
   ↓
Async operation
   ↓
Callback gets queued
   ↓
Event Loop
   ↓
Call Stack

And importantly:

Node.js does NOT mean everything is non-blocking.

For example:

fs.readFileSync(...)

is synchronous/blocking.

While:

fs.readFile(...)

is asynchronous/non-blocking.

This distinction becomes very important for backend development.








# day-2

> 1. http module - day - 2 index.js
> 2. global objects
> 3. module function executer
> 4. how node js works let see its advance version...




__Global Objects__ 
Global objects in nodejs are always available and do not need to be imported. They includes objects like 'global' , 'console' , 'setTimeout' , 'setInterval'


eg : 
console.log(global);





aptitude - logical / quantative
verbal / writing - passage , eassay......
dsa - c++
cs - fundamentals -> dbms, cn, os, oops - 2 months


web dev : 
html
css
js
react


nodejs
express
mongodb / postgresql
jwt 
authentication / authorization
redis
docker
aws 

sriniously - backend playlist


-- 30 lpa............






