const http = require("http");

const server = http.createServer((req, res) => {
    res.write("L!");
    res.write("OH MY GOTTO");
    res.write("SKIBIDI BOP");
    res.end();
})

server.listen(5000);