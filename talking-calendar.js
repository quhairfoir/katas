// take YYYY/MM/DD dates and turn it into human format (December 2nd, 2017)

var talkingCalendar = function(date) {
  var result = '';
  var month = date.slice(5,7);
  var day = date.slice(8,10);
  var year = date.slice(0,4);
  if (month === "12"){
    result += 'December ';
  } else if (month === "11"){
      result += 'November ';
  } else if (month === "10"){
      result += 'October ';
  } else if (month === "09"){
      result += 'September ';
  } else if (month === "08"){
      result += 'August ';
  } else if (month === "07"){
      result += 'July ';
  } else if (month === "06"){
      result += 'June ';
  } else if (month === "05"){
      result += 'May ';
  } else if (month === "04"){
      result += 'April ';
  } else if (month === "03"){
      result += 'March ';
  } else if (month === "02"){
      result += 'February ';
  } else if (month === "01"){
      result += 'January ';
  }
  if (day < 2){
    result += '1st, '
  } else if (day > 1 && day < 3){
    result += '2nd, '
  } else if (day > 2 && day < 4){
    result += '3rd, '
  } else {
    result += (day + "th, ");
  }
  result += year;
  return result;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));