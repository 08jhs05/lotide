const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length === 0) return [];

  let newArr = [];
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = arr[i];
  }
  return newArr;
};
