const fs = require('fs');

// 1 read file
// fs.readFile('data.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log("Error Occured : ",err)
//     }
//     else{
//             // console.log("Data : ",data.toString());
//             console.log("Data : ",data)
//         }
// })

// 2 read Sync
// try{
//     const ans = fs.readFileSync('data.txt',"utf-8");
//     console.log("Sync : ");
//     console.log(ans);
// }catch(err){
//     console.log(err);
// }

// 3 write file
// fs.writeFile('Output.txt',"This is Write File Demo",(err)=>{
//     if(err){
//         console.log("Error : ",err);
//     }
//     else{
//         console.log("File Write Successfully!!!");
//     }
// })

// 4 append file
// fs.appendFile('Output.txt',"\nThis is Appended Text",(err)=>{
//     if(err){
//         console.log("Error : ",err)
//     }
//     else{
//         console.log("Appended Data Successfully!!!")
//     }
// })

//5 fs unlink
fs.unlink('data.txt',(err)=>{
    if(err){
        console.log("Error : ",err);
    }
    else{
        console.log("Deleted Successfully ");
    }
})




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