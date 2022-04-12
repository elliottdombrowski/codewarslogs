//FIND COORDINATES / INDICES OF X 
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