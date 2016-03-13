var fs = require('fs');
var path = require('path');

var source = fs.readFileSync(path.join(__dirname, 'source.txt')).toString(),
    key = 19;

var caesar = require('../crypto/caesar');
var output = fs.writeFileSync(path.join(__dirname, 'output_3.txt'), caesar(source, key), 'utf-8');