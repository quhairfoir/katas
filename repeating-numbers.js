var repeatNumbers = function(data){
  var result = "";
    for (var i = 0; i < data.length; i++){ //loop goes around # of items in 1st array
      if (i > 0) {
        result += ", ";
      }
      var pair = data[i]
      for (var x = 0; x < pair[1]; x++){
        result += pair[0];
      }
    }
  return result;
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));