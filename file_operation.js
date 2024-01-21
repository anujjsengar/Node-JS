const fs=require("fs");
//to create folder  fs.mkdirSync("folder name");
fs.writeFileSync("bio.txt","My Name is Anuj Kumar.I am from Hathras.");
fs.appendFileSync("bio.txt","\nI am Leaning Node.jsfor full stack development");
const data=fs.readFileSync("bio.txt").toString();
console.log(data);
//Another method for Encoding; //file encoding;
const data_alt=fs.readFileSync("bio.txt",'utf8');
console.log(data_alt);
//File Rename;
fs.renameSync("bio.txt","mybio.txt");
//File Deletion;
fs.unlinkSync("mybio.txt");

