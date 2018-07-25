function makeCase(input, cases){
  var result = "";
  var char = "";
  for (var i = 0; i < input.length; i++){
    char = input.slice(i, (i + 1));
    if (i === 0 && (cases.indexOf('title') > -1 || cases.indexOf('pascal') > -1)){ // checking for initial cap
      result += char.toUpperCase();
    } else if (char === " "){ // checking spaces
        if (cases.indexOf('kebab') > -1){
          result += "-";
        } else if (cases.indexOf('snake') > -1){
          result += "_";
        } else if (cases.indexOf('camel') > -1 || cases.indexOf('pascal') > -1){
          result += input.slice((i + 1), (i + 2)).toUpperCase();
          i++;
        } else if (cases.indexOf('title') > -1){
          result += (char + input.slice((i + 1), (i + 2)).toUpperCase());
          i++;
      } else { // adding space if no conditions met
        result += char;
      }
    } else if (cases.indexOf('vowel') > -1 && (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')){ // checking vowels
      result += char.toUpperCase();
    } else if (cases.indexOf('consonant') > -1 && (char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u')){ // checking consonants
      result += char.toUpperCase();
    } else { // returning character if no conditions met
      result += char;
    }
  }
  if (cases.indexOf('upper') > -1){ //upper case and lower case outside for loop
    result = result.toUpperCase();
  } else if (cases.indexOf('lower') > -1){
    result = result.toLowerCase();
  }
  console.log(result);
  return result;
}

console.log(makeCase("this is a string", "camel") === "thisIsAString");
console.log(makeCase("this is a string", "pascal") === "ThisIsAString");
console.log(makeCase("this is a string", "snake") === "this_is_a_string");
console.log(makeCase("this is a string", "kebab") === "this-is-a-string");
console.log(makeCase("this is a string", "title") === "This Is A String");
console.log(makeCase("this is a string", "vowel") === "thIs Is A strIng");
console.log(makeCase("this is a string", "consonant") === "THiS iS a STRiNG");
console.log(makeCase("this is a string", ["upper", "snake"]) === "THIS_IS_A_STRING");