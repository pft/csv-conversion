var csv = require('csv');

exports.transform = function(fun, stream, options_in, options_out){
  var data;
  var parser = csv.parse(options_in);
  var transformer = csv.transform(fun);
  var stringifier = csv.stringify(options_out);

  stream.on('readable', function(){
    while ((data = stream.read())) {
      parser.write(data);
    }
  });

  parser.on('readable', function(){
    while ((data = parser.read())) {
      transformer.write(data);
    }
  });

  transformer.on('readable', function(){
    while ((data = transformer.read())) {
      stringifier.write(data);
    }
  });

  stringifier.on('readable', function(){
    while ((data = stringifier.read())) {
      process.stdout.write(data);
    }
  });  
}
