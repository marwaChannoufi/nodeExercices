var  fs = require('fs')
var  zlib=require('zlib')


// tocompresss a file .txt to .gz  we need to do 


 fs.createReadStream('input.txt')
 .pipe(zlib.createGzip())
 .pipe(fs.createWriteStream('inputCompress1.txt.gz'));
console.log('successfully done :) !!!');


// to decompress file


//   fs.createReadStream('inputCompress.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('unzip.txt'));
// console.log('successfully unzip done :) !!!');