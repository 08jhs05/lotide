const eqObjects = function(object1, object2) {
  let obj1Keys = Object.keys(object1);
  for(key of obj1Keys){
    if(Array.isArray(object1[key])){
      if(object1[key].length !== object2[key].length) return false;
      for(let i = 0; i < object1[key].length; i++){
        if(object1[key][i] !== object2[key][i]) return false;
      }
    }
    else if(object1[key] !== object2[key]) return false;
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
