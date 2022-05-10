// return masked string
function maskify(cc) {  
  let hash = [];
  
  for (let i = 0; i < cc.length; i++) {
    if (i < cc.length - 4) {
      hash.push('#');
    } else hash.push(cc[i]);
  };
  
  return hash.join('');
}

//BYRON
function maskify(cc) {
  let arr = cc.split('');
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = '#';
  }
  return arr.join('');
}