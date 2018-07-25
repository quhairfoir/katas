var camelCase = function(input) {
  var result = "";
  for (var i = 0; i < input.length; i++){
    if (input.slice(i, (i + 1)) === " "){
      result += input.slice((i + 1), (i + 2)).toUpperCase();
      i++
    } else {
      result += input.slice(i, (i + 1));
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));


//expected outcomes:
//thisIsAString
//loopyLighthouse
//supercalifragalisticexpialidocious