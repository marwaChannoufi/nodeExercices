// ======The crypto module provides cryptographic functionality that
//  includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, 
//  sign, and verify functions.



const crypto= require('crypto')


// ===== crypto hmac
// const secret= "marwa"
// const hash=crypto.createHmac('sha256',secret).update('hi tous le monde').digest('hex')
// console.log(hash)


// ===== crypto cipher



const cipher =crypto.createCipher('aes192', 'marwa')
var encrypted=cipher.update("bonjour tou le monde ",'utf8','hex')
encrypted += cipher.final('hex')
console.log(encrypted)


//  decipher
const decipher=crypto.createDecipher('aes192','marwa')
var encrypted="4627367f35cffca16a04e42bc3a12170"

var encrypted=decipher.update(encrypted,'hex','utf8')

encrypted += decipher.final('utf8')
console.log(encrypted)
