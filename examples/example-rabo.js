var fs = require('fs');
var rabotransform = require('./rabo2boqx0').transform;
var csvtransformer = require('../csv-conversion').transform;

var srcFile = process.argv.slice(2)[0];
var source = srcFile ? fs.createReadStream(srcFile) : process.stdin;

csvtransformer(rabotransform, source, {}, {});
