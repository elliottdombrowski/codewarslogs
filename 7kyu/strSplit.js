function sepStr(str) {
  let words = str.split(' ');
  let arr = [];
  let maxLength = -1;
  
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    };
  };
  
  for (pos = 0; pos < maxLength; pos++) {
    let row = [];
    for (wordIndex = 0; wordIndex < words.length; wordIndex++) {
      if (words[wordIndex].length < pos + 1) {
        row.push('');
      } else row.push(words[wordIndex][pos]);
    };
    
    arr.push(row);
  };
  
  
  return arr;
}