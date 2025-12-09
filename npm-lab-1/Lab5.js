const child_process = require('child_process')
const {exec, emit} = require('process');
const url =require('url');
const EventEmitter = require('events');

// child_process.exec("node -v",(error,stdout)=>{
//   if(error){
//     console.error("Error Occured : ",error.message);
//     return;
//   }
//   console.log("Current Node.js Version : ",stdout);
// })

// const cmd = child_process.spawn("cmd",["/c","dir"]);
// cmd.stdout.on("data",(data)=>{
//     console.log(`Output : ${data}`);
// })

// cmd.stderr.on("data",(data)=>{
//     console.error(`Error : ${data}`);
// });
// const https = require('https');
// console.log("Current Working Directory : ",process.cwd());

// const url = child_process.exec(" start https://darshanums.in/Login.aspx",(error,stdout)=>{
//      if(error){
//     console.error("Error Occured : ",error.message);
//     return;
//   }
//   console.log("Pathname ",stdout);
// })
// / to ? ni vache nu is pathname
// const inputURL = "https://darshanums.in/Login.aspx?name=arjun&lastname=bala"
// const parsed = url.parse(inputURL,true)
// console.log("Protocol : ",parsed.protocol);
// console.log("Hostname : ",parsed.hostname);
// console.log("PathName : ",parsed.pathname);
// console.log("Query Parameters : ",parsed.query);
// protocol,hostname,pathname,quert parameters
//  homework to see child process methods

// const myURL = new URL("https://example.com:8090")
// myURL.pathname = "products/item"
// myURL.searchParams.append("id","101")
// myURL.searchParams.append("color","white")
// console.log("Final URL : ",myURL)
// console.log("Serialized URL : ",myURL.toString())

const emitter = new EventEmitter();
emitter.on("Greet",()=>{
    console.log("Hello! From Greet Event");
})
emitter.emit("Greet")

setInterval(()=>{
    emitter.emit("tick");
},2000);

emitter.on("tick",()=>{
    console.log("Tick Event Occured");
})



