//Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?


function highestAndLowest(numbers) {
    // Write your code here
    var numbers2 = numbers.split(" ");
    var numbers3 = numbers2.map(function (number) {
        return +number;
    });
    // console.log(numbers3);
    // console.log(typeof numbers3[0]);
    return [Math.max.apply(null, numbers3), Math.min.apply(null, numbers3)];

}
module.exports = highestAndLowest;
