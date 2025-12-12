const fs = require('fs');

 //1 read file
// fs.readFile('data.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log("Error Occured : ",err)
//     }
//     else{
//             // console.log("Data : ",data.toString()); instead of utf-8 can do this
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

 //3 write file
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

// 5 fs unlink
// fs.unlink('data.txt',(err)=>{
//     if(err){
//         console.log("Error : ",err);
//     }
//     else{
//         console.log("Deleted Successfully ");
//     }
// })

// 6 folder my-data using  make dir 
// fs.mkdir('my-data',(err)=>{
//     if(err){
//         if(err.code==="EEXIST"){
//             console.log("Folder Already Exist!!!");
//         }else{
//             console.log("Error : ",err);
//         }
//         return;
//     }
//         console.log("Folder Created Successfully!!")
// })

// 7  list all file in folder called documents fs.readdir  print file names one by one
// fs.readdir("my-data",(err,files)=>{
//     if(err){
//         console.log("Error : ",err);
//         return;
//     }
//     console.log("Files in documents : ",files)
//     files.forEach(file=>{
//         console.log(file);
//     })
// })

 //8 copies file name source.txt to new file backup.txt fs.copyfile
//  fs.copyFile("Output.txt","Backup.txt",(err)=>{
//     if(err){
//         console.log("Error : ",err)
//         return;
//     }
//     else{
//         console.log("File Copied");
//     }
//  })

// 9 check if config.json exists in current directory fsExistSync
// if(fs.existsSync("config.json")){
//     console.log("Exists");
// }
// else{
//     console.log("File Not Exists");
// }

//10 fs.watch() monitor change in watchme.txt whenever file content change print file change
// fs.watch("Output.txt",()=>{
//     console.log("File Change");
// })
// console.log("Watching Output.txt File... (Edit Output.txt to see result!!)")




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