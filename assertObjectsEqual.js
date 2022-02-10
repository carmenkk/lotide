const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  

  const eqObjects = function(object1, object2) {
    if (Object.keys(object1).length !== Object.keys(object2).length) {
      return false;
    } else {
      for (let key of Object.keys(object1)) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key],object2[key])) {
            return false;
          }
        } else if (object1[key] !== object2[key]) {
          return false;
        }
      }
    } return true;
  };
  if (eqObjects(object1, object2)) {
    console.log(`😁😁😁Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
  
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);