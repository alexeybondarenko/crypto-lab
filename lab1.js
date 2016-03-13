var vigenere = require('./crypto/vigenere.js');

var str = 'Bondarenko Oleksii Sergiyovisch',
    key = 'sun is bright';


var encoded = vigenere(str, key);
console.log(encoded);
console.assert(vigenere(encoded, key, true) == str);
console.log('Encode and decode success');