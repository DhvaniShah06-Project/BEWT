const path = require('path') 
const os = require('os')

// console.log("Directory Name : ",__dirname);
// console.log("File Name : ",__filename);
// console.log("File Extension : ",path.extname(__filename));
// console.log("Full Path : ",path.resolve(__filename))

// const ans = path.join("users","arjun","documents","project");
// console.log("Joined Path : ",ans);

// const wrongpath = "//folder//subfolder////file.txt"
// const clear = path.normalize(wrongpath);
// console.log("Clear Path : ",clear);

// const a = path.isAbsolute("Lab 4.js");
// if(a==true)
// {
//     console.log("This is an Absolute Path");
// }
// else{
//     console.log("This is Relative Path");
// }

// const b = path.resolve('Lab 4.js');
// console.log("Absolute Path : ",b);

// console.log(os)
// console.log("OS Name : ",os.type());
// console.log("Release Version : ",os.release());
// console.log("Platform : ",os.platform());
// console.log ("Architecture : ",os.arch());

// function convertToGB(bytes){
//     return(bytes/(1024*1024*1024)).toFixed(2);
// }
 
// console.log("Total Memory : ",convertToGB(os.totalmem())," GB")
// console.log("Free Memory : ",convertToGB(os.freemem())," GB")

// console.log("User Details : ");
// console.log(os.userInfo());

// const uptimeSec = os.uptime();
// const uptimeHours = (uptimeSec/3600).toFixed(2);
// console.log("Uptime in Seconds : ",uptimeSec);
// console.log("Uptime in Hours : ",uptimeHours);

const cpus = os.cpus();
console.log("Number of CPU Cores : ",cpus.length);
cpus.forEach((core,index)=>{
    console.log(`Core ${index+1} Model : `,core.model)
})

const network = os.networkInterfaces();
console.log("\nNetwork Interfaces : ");
console.log(network);
