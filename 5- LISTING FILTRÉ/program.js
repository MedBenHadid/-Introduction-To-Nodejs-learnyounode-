var fs = require('fs')
const file = process.argv[2]
const ext= process.argv[3]

fs.readdir(file, function (err, data) {

data.map((el, i) => {
   if (el.lastIndexOf('.'+ext) > -1 )  console.log(el);
   
})
})

