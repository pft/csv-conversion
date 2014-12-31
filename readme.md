csv-conversion
==============

Convert csv documents to other csv documents using node-csv.

Usage
-----

    var fs = require('fs');
    var csvtransformer = require('csv-conversion').transform;

    var srcFile = process.argv.slice(2)[0];
    var source = srcFile ? fs.createReadStream(srcFile) : process.stdin;

    csvtransformer(function(row){return row}, // row-transforming function
                   source,
                   {delimiter:","},  // Options for parsing source
                   {delimiter:";"}); // Options for output

Note you may leave the input and output options out, csv-conversion
will then use node-cvs' defaults.

On the command-line, do something like

    $> < input.csv node mytransformer.js > output.csv

Or

    $> node mytransformer.js input.csv > output.csv

