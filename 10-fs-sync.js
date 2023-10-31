const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./test/first.txt', 'utf8')

writeFileSync(
    './test/result.txt', 
    `The Result : ${first}, How are You?`,
    { flag: 'a' }
)
