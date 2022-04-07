// write your code here
const http = require('http')

const server = http.createServer(function (req, res){
    //send headers
    res.writeHead(200, {'Content-Type':'text/plain'});

    //send body
    res.end("Hello World");

});

//listen for incoming connections
server.listen(8080, 'localhost', null, function(){
    //log message that the server is listening and on which port
    console.log("Server is listening on localhost:8080")
});