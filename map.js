const assertArraysEqual = function(arr1, arr2) {
  const eqArrays = function(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  if (eqArrays(arr1, arr2)) {
    console.log(`😁😁😁Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😭😭😭Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const result3 = map(words, word => word.charAt(word.length - 1));


assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2,[6,7,2,5,3]);
assertArraysEqual(result3,["d","l","o","r","m"]);