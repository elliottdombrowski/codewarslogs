function getCount(str) {
  let vowelsCount = 0;
  
  let strCase = str.toLowerCase();
  for (let i = 0; i < strCase.length; i++) {
    if (strCase[i] === 'a' || strCase[i] === 'e' || strCase[i] === 'i' || strCase[i] === 'o' || strCase[i] === 'u') {
      vowelsCount++;
    } 
  }
  
  return vowelsCount;
}