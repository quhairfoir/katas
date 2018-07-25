function generateBoard(queenW, queenB){
  var board = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  board[queenW[0]][queenW[1]] = 1;
  board[queenB[0]][queenB[1]] = 1;
  return board;
}

var queenW = [7, 7];
var queenB = [7, 0];

console.log(generateBoard(queenW, queenB));


function queenThreat(board){
  var threat = false;
  //check for same x asis
  if (queenW[0] == queenB[0]){
    threat = true;
  } else if (queenW[1] == queenB[1]){
    threat = true;
  }

  //check for same x axis

}