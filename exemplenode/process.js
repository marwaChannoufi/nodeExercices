// processis the general like the global in windows
// const process=require('process')



// the architecte systeme on 64bit
console.log(process.arch)
//  proceess id 
console.log(process.pid) 
// to show the plateforme like windows linux mac u can use 
console.log(process.platform);
// to show the version of server node ucan use
console.log(process.version)


// to show the actualdirectory there we are wecan use 
console.log(process.cwd());
console.log(process.uptime());


// wecan takeinfo from terminal with process.arg
// wecan give an argiment by write in the terminal node process marwa channoufi 12345

process.argv.forEach((el,index,arr)=>{
    console.log(`${index}:${el}`);
})