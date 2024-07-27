const fs = require("fs");


fs.readFile("./contents/file_01.txt", "utf8", (error, result) => {
    if (error){
        console.log(error);
        return
    }
    const first = result;
    fs.readFile("./contents/file_02.txt", "utf8", (error, result) => {
        if (error){
            console.log(error);
            return
        }
        const second = result;
        
        fs.writeFile(
            "./contents/result-async.txt",
            `Here is the result: ${first}, ${second}`,
            (error, result) => {
                if(error){
                    console.log(error);
                    return
                }
                console.log(result);
            })
    
    })
})



