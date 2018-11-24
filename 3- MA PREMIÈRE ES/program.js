var fs = require('fs')
const file = process.argv[2]
let Res=fs.readFileSync(file).toString()
let T=Res.split('\n')
console.log(T.length-1)
