//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?

function highestAndLowest(numbers) {
    // Write your code here
    numbers = numbers.split(" ");
  
parseInt(Math.max.apply(null, numbers)) + " " +  parseInt(Math.min.apply(null, numbers)); 

}

// highestAndLowest("2 4 5 6 3");

module.exports = highestAndLowest;
