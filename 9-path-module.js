const path = require('path')

console.log(path.sep)

const  abc = path.join('/test','/text.txt')
console.log(abc)

const base = path.basename(abc)
console.log(base)

const absolute = path.resolve(__dirname,'test','text.txt')
console.log(absolute)