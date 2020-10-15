const assert = require("assert")

// assert test is a test if have a error  
 function result(a,b,c,d){
     return a+b+c+d
 }
  var exprct= result(1,3,5,1)
  assert(exprct===10)