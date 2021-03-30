const eqArrays = function(arr1, arr2){
  if(arr1.length !== arr2.length) return false;

  let arraylength = arr1.length;
  for(let i = 0; i < arraylength; i++){
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const without = function(source, itemsToRemove){
  let arr = [];
  loop1: for(sourceItem of source){
    for(item of itemsToRemove){
      if(sourceItem === item) continue loop1;
    }
    arr.push(sourceItem);
  }
  return arr;
}
