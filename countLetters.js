const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(input) {
  const results = {};
  for (let letter of input) {
    if ((/[a-zA-Z]/).test(letter)) {
      
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }

    }

  }
  return results;
};

assertEqual((countLetter("lighthoue").l),1);