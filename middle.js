const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){

  if(arr1.length !== arr2.length) return false;

  let arraylength = arr1.length;
  for(let i = 0; i < arraylength; i++){
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

const middle = function(arr){
  let returnArray = [];
  if(arr.length < 3) return returnArray;
  let midIndex = arr.length % 2 === 1 ? [Math.floor(arr.length/2)] : [arr.length/2 - 1, arr.length/2];
  for(index of midIndex){
    returnArray.push(arr[index]);
  }
  return returnArray;
}

console.log(middle([1]));
console.log(middle([1,2]));

console.log(middle([1,2,3]));
console.log(middle([1,2,3,4,5]));

console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6]));