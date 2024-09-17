// const fs = require("fs");
//const ans = fs.readFileSync("./content.txt","utf-8");
//console.log(ans);


//Async
const fs = require("fs");
console.log("2");
fs.readFile("./content.txt","utf-8",( err, ans) => {

    console.log(ans);
});
console.log("5");