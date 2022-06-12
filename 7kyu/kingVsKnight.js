// You put a Knight and a King in the board.
// 
// Complete the method that tell us which one can capture the other one.
// 
// You are provided with two object array; each contains an integer (the rank, first item) and a string/char (the file, second item) to show the position of the pieces in the chess board.
// 
// Return:
// 
// "Knight" if the knight is putting the king in check,
// "King" if the king is attacking the knight
// "None" if none of the above occur


function knightVsKing(knightPosition, kingPosition) {
  let kingRow = kingPosition[0];
  let knightRow = knightPosition[0];
  
  let kingFile = kingPosition[1].charCodeAt();
  let knightFile = knightPosition[1].charCodeAt();
  
  let rowDelta = Math.abs(kingRow - knightRow);
  let fileDelta = Math.abs(kingFile - knightFile);
  
  if (rowDelta <= 1 && fileDelta <= 1) {
    return "King";
  } else if (rowDelta === 1 && fileDelta === 2) {
    return "Knight";
  } else if (rowDelta === 2 && fileDelta === 1) {
    return "Knight";
  } else {
    return "None";
  }
}
