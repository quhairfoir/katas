//two numbers, total of transaction and amount of cash
//both represented as whole number in cents: $10 = 1000
//function must return object that describes total amount of change
//must omit types that shouldn't give back

//below is NOT GOOD ENOUGH, returns string instead of object!
function calculateChange(total, cash){
  var cashBack = cash - total;
  var remainder = 0;
  var quantity = 0;
  var change = "";
    if (cashBack >= 2000){
      quantity = Math.floor(cashBack / 2000);
      cashBack -= (quantity * 2000);
      change += ("twenty: " + quantity);
        if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 2000 && cashBack >= 1000){
      cashBack -= 1000;
      change += ("ten: 1");
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 1000 && cashBack >= 500){
      //five to give back
      cashBack -= 500;
      change += ("five: 1");
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 500 && cashBack >= 200){
      //twoonie to give back
      quantity = Math.floor(cashBack / 200);
      cashBack -= (quantity * 200);
      change += ("twoDollar: " + quantity);
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 200 && cashBack >= 100){
      //loonie to give back
      cashBack -= 100;
      change += ("dollar: 1");
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 100 && cashBack >= 25){
      //# of quarters to give back
      quantity = Math.floor(cashBack / 25);
      cashBack -= (quantity * 25);
      change += ("quarter: " + quantity);
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 25 && cashBack >= 10){
      //# of dimes to give back
      quantity = Math.floor(cashBack / 10);
      cashBack -= (quantity * 10);
      change += ("dime: " + quantity);
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 10 && cashBack >= 5){
      //nickle to give back
      cashBack -= 5;
      change += ("nickle: 1");
      if (cashBack === 0){
          return change;
        } else {
          change += ", ";
        }
    }
    if (cashBack < 5 && cashBack >= 1){
      //# of pennies to give back
      change += ("penny: " + cashBack);
    }
    return change;
  }


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));