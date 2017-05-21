//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers) {
    // Write your code here
    numbers = numbers.split(" ");
  
let a = Math.max.apply(null, numbers);   
let b = Math.min.apply(null, numbers); 

return parseInt(a) + " " + parseInt(b);
}

// highestAndLowest("2 4 5 6 3");

module.exports = highestAndLowest;
