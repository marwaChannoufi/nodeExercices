// prendredesinfo du fichier et le transformer dans un autre 



const fs=require('fs')

var rs =fs.createReadStream('input.txt')
var ws=fs.createWriteStream('outputPipe.txt')

console.log('done successfully :) !!!');

rs.pipe(ws)