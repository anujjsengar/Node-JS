const fs=require("fs");
// File Creation and Writing;
fs.writeFile("bio.txt","My Name is Anuj Kumar.I am from Hathras\n",(err)=>{console.log("file is created")});
//Append Data into File;
fs.appendFile("bio.txt","I am learning NODE.JS",(err)=>{console.log("Task Completed")});
//File Read
fs.readFile("bio.txt","utf8",(err,data)=>{console.log(data)});
