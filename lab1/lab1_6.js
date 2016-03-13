var fs = require('fs');
var path = require('path');

var source = fs.readFileSync(path.join(__dirname, 'source.txt')).toString(),
    key = 'BONDARENKO';

var vigenere = require('../crypto/vigenere');
var output = fs.writeFileSync(path.join(__dirname, 'output_6.txt'), vigenere(source, key), 'utf-8');