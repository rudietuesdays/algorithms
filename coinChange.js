function coinChange(val) {
  var valLeft = val;
  var coins = [1,5,10,25];
  var index = coins.length - 1
  var result = {
    "Q": 0,
    "D": 0,
    "N": 0,
    "P": 0,
  };

  changeHelp(index, valLeft, coins);

  return result;
};

function changeHelp(index, valLeft, coins) {
  console.log(index, valLeft, coins)
  var thisCoin = coins[index]
  while(valLeft >= 0){
    changeHelp(index-1, valLeft)
    valLeft -= thisCoin
  }
  if (index === 0){
    result[index] = math.floor(valLeft % thisCoin)
  }
};


changeHelp(200);
