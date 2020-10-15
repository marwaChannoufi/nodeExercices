var fs=require('fs')
// asynchronous form


fs.readFile('input.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log( data.toString());
})


// synchrounous form to read info fromtxt

var data=fs.readFileSync('input2.txt')
console.log(data.toString());



// conclusion synchrounous dont block the code like asuncrounous 