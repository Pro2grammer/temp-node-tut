const { readFile, writeFile } = require('fs')

readFile('./test/first.txt','utf8',(err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result; 

    readFile('./test/text.txt','utf8',(err,result2) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result2

        writeFile(
            './test/result_new.txt',
            `The result String : ${first}, ${second}`,
            (err, result) =>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log(result)
            }


        )
    })


})