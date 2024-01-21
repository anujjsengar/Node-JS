//Challenge 2(CUED)
//Create a File and Write data and append some data using asyncronous way
//read the data without buffer using encoding
//delete the file;
const fs=require("fs");
fs.writeFile("File1.txt","My Name is Anuj Senagr",(err)=>{console.log("File Created Successfully and Data Entered")});
fs.appendFile("File1.txt","\n I love My Mummy and Papa",(err)=>{console.log("Data Added Succesfully")});
fs.readFile("File1.txt","utf8",(err,data)=>{console.log(data)});
fs.rename("File1.txt","File_1.txt",(err)=>{console.log("Renamed")});
fs.unlink("File_1.txt",(err)=>{console.log("Deletion Done")});


