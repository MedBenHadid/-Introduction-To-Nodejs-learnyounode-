let s = process.argv.reduce((sum,x,i) => i<2 ?sum:(sum+(+x)), 0 )
console.log(s)