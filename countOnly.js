const countOnly = function(allItems, itemsToCount){
  let objCount = {};
  for(objectKey in itemsToCount){
    if(itemsToCount[objectKey]){
      console.log(objectKey)
      console.log(itemsToCount[objectKey])
      for(element of allItems){
        if(element === objectKey) objCount[objectKey] = objCount[objectKey] === undefined ? 1 : objCount[objectKey] + 1;
      }
    }
  }
  return objCount;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);