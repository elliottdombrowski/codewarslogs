//FIND COORDINATES / INDICES OF X 

// Given a two dimensional array, return the co-ordinates of 'x'.
// 
// If 'x' is not inside the array, or if 'x' appears multiple times, return []
// 
// The co-ordinates should be zero indexed.
// 
// You should assume you will always get an array as input. The array will only contain 'x's and 'o's.

const xMarksTheSpot = (input) => {
  let coords = [];
  
  if (input.length === 0) return [];
  
  //row one
  for (column = 0; column < input[0].length; column++) {
    for (row = 0; row < input.length; row++) {
      if (input[row][column] === 'x') coords.push([row, column]);
    }
  }
  if (coords.length !== 1) {
    return [];
  } else return coords[0];
}