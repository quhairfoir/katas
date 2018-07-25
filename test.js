var multiplicationTable = function(maxValue) {

  var result = "";

  // function declaration for base array generation
  function makeBaseArray(maxValue){
  var baseArray = [];
  for (var i = 1; i <= maxValue; i++){
    baseArray.push(i);
    }
  return baseArray;
  }


  // function declaration for making number strings !!!!!!!!!!!!!!!! COMPLETE !!!!!!!!!!!!!!!!
  function stringMaker(array, indexNumber){
    var leftSpace = " ";
    var rightSpace = "";
    var string = "|";
    if (array[array.length -1] >= 10 ){ // 3 digit max
      for (var i = array[indexNumber]; i <= (array[indexNumber] * array[array.length -1]); i = i + array[indexNumber]){
        if (i <= 9){ // box being created contains a single digit
          rightSpace = "   |";
        } else if (i > 9 && i < 100){ // double digit
          rightSpace = "  |";
        } else if (i > 99 && i < 1000){ // triple digit
          rightSpace = " |";
        }
        string += leftSpace + i + rightSpace;
      }
    }
    if (array[array.length -1] < 10 && array[array.length -1] > 3){ // 2 digit max
      for (var j = array[indexNumber]; j <= (array[indexNumber] * array[array.length -1]); j = j + array[indexNumber]){
        if (j <= 9){ // box being created contains a single digit
          rightSpace = "  |";
        } else if (j > 9 && j < 100){ // double digit
          rightSpace = " |";
        }
        string += leftSpace + j + rightSpace;
      }
    }
    if (array[array.length -1] < 3){ // 1 digit max
      rightSpace = " |";
      for (var k = array[indexNumber]; k <= (array[indexNumber] * array[array.length -1]); k = k + array[indexNumber]){
        string += leftSpace + k + rightSpace;
      }
    }
    return string += "\n";
  }


  // declare function to make row of bars !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! COMPLETE
  function makeBars(maxValue){
    var barString = "+";
    if (maxValue >= 10){ // 3 digit max number
      for (var i = 1; i <= maxValue; i++){
        barString += "-----+";
      }
    } else if (maxValue < 10 && maxValue > 3){ // 2 digit max number
      for (var j = 1; j <= maxValue; j++){
        barString += "----+";
      }
    } else if (maxValue < 3){ // single digit max number
      for (var k = 1; k <= maxValue; k++){
        barString += "---+";
      }
    }
    return barString += "\n";
  }

  // generate baseArray
  var array = makeBaseArray(maxValue);


  //make the damn thing
  for (var i = 1; i <= maxValue; i++){
    var index = (i - 1);
    result += makeBars(maxValue);
    result += stringMaker(array, index);
    result += makeBars(maxValue);
  }
  return result;
};


console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));