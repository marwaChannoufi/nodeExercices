// ========== try catch
// try {
//     var x=2,y=0
//     var d;
//     d=x+y
//     console.log(d)
    
// } catch (error) {
//     console.log(error)
// }



var fs =require('fs')

const marwacallback=(err,data)=>{
    if(err){
        console.log("the error is :",err)
    }
    console.log(data)

}
fs.readFile(' /node exercices/console.js',marwacallback)