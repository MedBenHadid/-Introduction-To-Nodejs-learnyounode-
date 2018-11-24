var Recheche=require('./mymodule')
const file = process.argv[2]
const ext = process.argv[3]
Recheche(file, ext, function (data,err) {
		if(err) return callback(err)
        data.map(el => { console.log(el)});

})