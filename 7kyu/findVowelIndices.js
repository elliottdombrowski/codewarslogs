//FIND ALL VOWEL INDICES IN STRING
function vowelIndices(word){
  let arr = [];
  
  for (let i = 0; i < word.length; i++) {
    if ((/[AEIOUYaeiouy]/).test(word[i])) arr.push(i+1)
  }
  return arr;
}