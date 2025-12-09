//read file readfilesync write append unlink makefoldermydirandcheckexist
const fs = require('fs');

// fs.readFile('data.txt',(err,data)=>{
//     if(err){
//         console.log("Error Occured : ",err)
        
//     }
//     else if (data){
//             console.log("Data : ",data.toString());
//         }
// })

// const ans = fs.readFileSync('data.txt')
// console.log("Sync Data : ",ans.toString());

// fs.writeFile('Output.txt',"This is Write File Demo",(err)=>{
//     if(err){
//         console.log("Error : ",err);
//     }
//     else{
//         console.log("File NWrite Successfully!!!");
//     }
// })

// fs.appendFile('Output.txt',"\nThis is Appended Text",(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }
//     else{
//         console.log("Appended Data Successfully!!!")
//     }
// })



// fs.exists('data.txt',(exists)=>{
//     console.log("File Exists : ",exists);
// });
// fs.stat('./data.txt',(err,data)=>{
//    if(err){
//         console.log("Error Occured : ",err)
//     }
//     else if(data){
//     console.log("DATA : ",data);
//     }
// })