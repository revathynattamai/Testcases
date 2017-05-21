//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
let str = nums.toString();
let result = [str[0]];
module.exports = function (nums, out) {
  // Write your code here

  
    for (var x = 1; x < str.length; x++) {
      if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
        result.push('-', str[x]);
      }
      else {
        result.push(str[x]);
      }
    }
  
  out(result.join(''))
}



