//ADDING ARRAYS TO FORM SENTENCES
function arrAdder(arr) {
  let str = '';
  
  for (i = 0; i < arr[0].length; i++) {
    for (j = 0; j < arr.length; j++) {
      str += arr[j][i];
    }
    str += ' ';
  }
  return str.trim();
}