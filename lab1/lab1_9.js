var fs = require('fs');
var path = require('path');

var source = fs.readFileSync(path.join(__dirname, 'output_6.txt')).toString();

var vigenere = require('../crypto/vigenere-new');
//var output = fs.writeFileSync(path.join(__dirname, 'output_6.txt'), vigenere(source, key), 'utf-8');
console.log(vigenere.crack(source, 12));