// Write a function called map which takes an array and a function as arguments. Without utilizing any of the built-in methods available to your language, return an array with the function applied to each element.

function map(arr, func) {
const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr[i] = func(arr[i]);
  } return newArr;
};

module.exports = {
  map
};
