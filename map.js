const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, func) {
  const result = [];
  arr.forEach(elem => result.push(func(elem)));
  return result;
}

const results1 = map(words, word => word[0]);
console.log(results1);
