var CryptoJS = require("crypto-js");

function encrypt(obj,NodeId){
// Encrypt
// console.log(obj);
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(obj),NodeId);

// console.log(ciphertext.toString());
return ciphertext.toString();
// Decrypt

}


function decrypt(ciphertext,NodeId){
// console.log(ciphertext);
// console.log(NodeId);
  var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), NodeId);
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  // console.log('decrypt = '+decryptedData);
  return decryptedData;

}



module.exports={encrypt:encrypt,decrypt:decrypt};