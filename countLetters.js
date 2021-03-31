const countLetters = function(str){
  let letterCounts = {};
  for(letter of str){
    if(letter !== " "){
    letterCounts[letter] = letterCounts[letter] === undefined ? 1 : letterCounts[letter] + 1;}
  }
  return letterCounts;
}

console.log(countLetters("Lighthouse LAbs Lighthouse labs bark bark bark"));