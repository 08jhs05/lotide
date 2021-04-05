const assertEqual = require('../assertEqual');
const assertarraysEqual = require('../assertarraysEqual');
const head = require('../head');
const tail = require('../tail');

console.log("--- Test assertEqual.js ---");
assertEqual("Apple", "Google");
assertEqual(1, 1);

console.log("--- Test head.js ---");
assertEqual(head([0,1,2,3]), 0);
assertEqual(head([]), undefined);

console.log("--- Test tail.js ---");
assertarraysEqual(tail([]), []);
assertarraysEqual(tail([1,2,3]), [2,3]);