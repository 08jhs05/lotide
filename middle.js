const middle = function(arr){
  let returnArray = [];
  if(arr.length < 3) return returnArray;
  let midIndex = arr.length % 2 === 1 ? [Math.floor(arr.length/2)] : [arr.length/2 - 1, arr.length/2];
  for(index of midIndex){
    returnArray.push(arr[index]);
  }
  return returnArray;
}

module.exports = middle;