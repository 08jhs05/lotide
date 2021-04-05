const eqArrays = function(arr1, arr2){

  if(arr1.length !== arr2.length) return false;

  let arraylength = arr1.length;
  for(let i = 0; i < arraylength; i++){
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
