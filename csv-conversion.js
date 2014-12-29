var csv = require('csv');

exports.transform = function(fun, stream){
  var data;
  var parser = csv.parse();
  var stringifier = csv.stringify();
  var transformer = csv.transform(fun);

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
