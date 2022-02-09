
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




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😭😭😭Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};


 



const middle = arr => {
  let middleElement =[];
  let index = 0;
 
  
  if (arr.length >2) {
    index = Math.round(arr.length / 2);
    if(arr.length % 2 !== 0) {
      middleElement.push(arr[index - 1]);//the push() method returns the length of the array 
     } else if (arr.length % 2 === 0) {
      middleElement.push((arr[index - 1]),(arr[index]));
      }
  
  }
  return middleElement;
};



assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1,2,3,4]), [2,3]);