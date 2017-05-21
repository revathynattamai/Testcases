//Q5. Write a function which takes array as argument and remove duplicates elements and returns a new array.
// INPUT
var arr = [1, 1, 2, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

function removeDuplicates(arr) {
  //Write your code here
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return (res);
}

module.exports = removeDuplicates;
