const eqArrays = function(arr1, arr2){

  if(arr1.length !== arr2.length) return false;

  let arraylength = arr1.length;
  for(let i = 0; i < arraylength; i++){
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

module.exports = eqArrays;