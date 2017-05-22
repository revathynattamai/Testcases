//Q13. Write a program to list (Fibonacci) series till a given number?

fibonacci = function (numMax, done) {
    //Write your code here
    const res = [0, 1];
    for (let i = 0; i < numMax; i++) {
        var b = res[i] + res[i + 1];
        res.push(b);
    }
    done(res);
}
module.exports = fibonacci;
