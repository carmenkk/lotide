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


module.exports = middle;
