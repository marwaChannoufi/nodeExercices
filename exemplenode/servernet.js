const { Socket } = require('dgram')
const net = require('net')
var server=net.createServer((socket)=>{
    socket.end('hi sweet work !')
}).on('error',(err)=>{
    throw err
})
server.listen(()=>{
    address =server.address()
    console.log('listenning on port',address);
})