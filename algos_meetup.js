// https://www.hackerrank.com/challenges/game-of-stones-1
function processData(input) {
    //Enter your code here
    var player = true;
    for (i = 1; i <= input; i++){
      var n = Math.floor(Math.random()*10)
      // console.log(n, (n%7));
      processDataHelper(n, player)
    }
}

function processDataHelper(stones, player){
  console.log(stones);
  var moves = [2,3,5]
  if ((stones == 2) || (stones == 3 ) || (stones == 5)){
    if (player == true){
      console.log("first");
    } else {
      console.log("second");
    }

  } else if ((stones%2 == 1) || (stones%3 == 1) || (stones%5 ==1)){
    if (player == true){
      player = false;
    }
    if (player == true){
      console.log("first")
    } else {
      console.log("second");
    }

  } else {
    var move = stones - (moves[Math.floor(Math.random()*moves.length)]);
    if (player == true){
      player = false;
    }
    return processDataHelper(move, player);
  }

}

processData(5)
