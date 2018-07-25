
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array1.length - 1);
console.log(array1[array1.length - 1]);

for (i = 1; i <= array1.length; i++){// the loop to make required number of # strings

}


function stringMaker(){ // working, inelegant function to make strings using
  var string1 = '';
  var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(stringnum);
  for (var i = array1[2]; i <= (array1[2] * array1[array1.length -1]); i = i + array1[2]){
    string1 += "  " + i + "  ";
  }
  return string1;
}

function test(max){

  function makeBaseArray(max){
  var baseArray = [];
  for (var i = 1; i <= max; i++){
    baseArray.push(i);
  }
  return baseArray;
  }


  function stringMaker(array, indexNumber){
    var string = "";
    for (var i = array[indexNumber]; i <= (array[indexNumber] * array[array.length -1]); i = i + array[indexNumber]){
      string += "  " + i + "  ";
    }
    return string;
  }

  baseArray = makeBaseArray(max);
  console.log(baseArray);

  console.log(stringMaker(baseArray, 2));

}

test(10);

// both of the following loops product the desired string of numbers
/*for (var i = 1; i <= 10; i = i + 1){
  (VARIABLE) += "  " + i + "  ";
}
for (var i = 2; i <= 20; i = i + 2){
  (VARIABLE) += "  " + i + "  ";
}*/

