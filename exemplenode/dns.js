const dns= require('dns')
// const { hostname } = require('os')


// =====with lookup function you give the hoste name andyou get the adreee======
// dns.lookup('www.facebook.com',(err,addresses,family)=>{
//     console.log("address /",addresses)
//     console.log("family",family)
// })


// dns.resolve4('www.yahoo.com',(err,addresses)=>{
//     if(err) throw(err)
//     console.log(`address :${JSON.stringify(addresses)}` )
//     addresses.forEach((a)=>{
//         dns.reverse(a,(err,hostname)=>{
//             if(err){
//                         throw(err)
//                     }
//                 console.log(`reserve for ${a} : ${JSON.stringify(hostname)}`)    
//         }) 
//     }) 
// })
  
        
    // in lookup service you give the adreessand get the hostnameand the port and servece
    for(i=1;i<=70;i++){
        dns.lookupService('87.248.100.215',i,(err,hostname,service)=>{
        
    console.log(hostname,service)
    })
    }

    