
var fs = require('fs')
const file=process.argv[2]
fs.readFile(file, function (err, data) {
    if (err) throw err;

  
    let D= data.toString()
    let T = D.split('\n')
    console.log(T.length-1)
});
