function credit(record){
  return ( record[3] === "C" )
    ? record[4]
    : 0;
}
function debet(record){
  return ( record[3] === "D" )
    ? record[4]
    : 0;
}
function datum(record){
  var ds = record[2];
  return [ds.slice(6), ds.slice(4,6), ds.slice(0,4)].join('-')
}
function omschrijving(record){
  return [record[6], record[10]].filter(function(f){
    return (f !== '')
  }).join(' ')
}
function rabo2boqx0(record){
  return [datum(record),
          omschrijving(record),
          credit(record),
          debet(record)];
}
exports.transform = rabo2boqx0;
