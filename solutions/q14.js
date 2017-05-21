//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

//Write your code here
function generatePyramid(a) {
        var arr = [];
    for (var i = 1; i <= a; i++) {
        arr = [];
        for (var j = 1; j <= i; j++) {
            arr.push("*");            
        }
        console.log(arr.join(" ") + "\n");
    }
}

generatePyramid(6);