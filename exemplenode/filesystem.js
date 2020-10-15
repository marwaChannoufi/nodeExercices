// you can read and write a file

// ====read file syste

const fs=require('fs')
var data=''

// rs == readstream
var rs=fs.createReadStream('input.txt')
rs.setEncoding('utf8')
rs.on('data',function(chunk){
    data += chunk
})
rs.on('end',function()
{
    console.log(data);
})
rs.on('error',function(error){
    console.log(error.stack);

})
console.log('app finished');



// ==== wr=write stream 

var data1='  ajouter  un element'

// ws == writestream
var ws=fs.createWriteStream('output.txt')
ws.write(data1,'utf8')
ws.end()
ws.on('finish',function(){
    console.log('done successfully!!!!');
})


 
ws.on('error',function(error){
    console.log(error.stack);

})
console.log('app finished');