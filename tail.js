const tail = function(arr) {
  if (arr.length === 0) return [];

  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr[i - 1] = arr[i];
  }
  return newArr;
};

module.exports = tail;