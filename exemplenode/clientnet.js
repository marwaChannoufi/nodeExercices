const net = require('net')
var client=net.connect({port: 60972},()=>{
    console.log('Connected !!');
}) 

client.on('data',(data)=>{
    console.log(data.toString())
    client.end
})

client.on('end',()=>{
    console.log('disconnect !!!!!!!')
    client.end
})



