const tls =require('tls')
function connected(stream){
    if(stream){
        stream.write('GET/HTTP1.0\n\r Host:encrypted.google.com:443\n\r\n\r')
    }
    else{
        console.log('connection failed');
    }
}
var dummy=this
dummy.socket=tls.connect(443,'encrypted.google.com',function(){
    dummy.connected =true
    if(dummy.socket.authorized){
        dummy.socket.setEncoding('utf8')
        connected(dummy.socket)
    }
    else{
        console.log(dummy.socket.authorizationError);
        connected(null)
    }
        
     
})