// node js with web base not console 
var http = require('http') 
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end("channoufi marwa ")
}).listen(8080)

console.log('server running')