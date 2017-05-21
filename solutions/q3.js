//Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
//For example if numbers is 12345648 the output should be 123456-4-8.
let nums = "12345648";
let str = nums.toString();
let result = [str[0]];
module.exports = function (nums, out) {
  // Write your code here 
    for (var i = 1; i < str.length; i++) {
      if ((str[i - 1] % 2 === 0) && (str[i] % 2 === 0)) {
        result.push('-', str[i]);
      }
      else {
        result.push(str[i]);
      }
    }
  
  out(result.join(''))
}



