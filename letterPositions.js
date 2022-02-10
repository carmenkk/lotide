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




const letterPositions = function(sentence) {
  const results = {};
  
  const str = sentence.replace(/\s/g, '');
  
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  } return results;
};

console.log(letterPositions("lighthouse"))
assertArraysEqual(letterPositions("lighthouse").g, [2]);