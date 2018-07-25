function calculateChange(total, cash){
  var cashBack = cash - total;
  var change = {};
  var quantity = 0;
  var moneyText = ["twenty", "ten", "five", "twoDollar", "dollar", "quarter", "dime", "nickle", "penny"];
  var denominations = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  for (var i = 0; i < denominations.length; i++){
    if (cashBack >= denominations[i]){
      quantity = Math.floor(cashBack / denominations[i]);
      change[`${moneyText[i]}`] = quantity;
      cashBack -= (quantity * denominations[i]);
    }
  }
  return change;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

