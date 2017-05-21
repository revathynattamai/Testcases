// 6. Write a function to find the difference of two arrays?

function difference(arr1,arr2) {
// Write your code here
    var diff = [];
    for (var i = 0; i< arr1.length; i++) {
        diff.push(arr1[i]);
    }
    //diff [1, 2, 3];

    for (var i=0; i< arr2.length; i++) {
        if(diff.indexOf(arr2[i]) === -1) {
            diff.push(arr2[i]);
        } else {
            diff.splice(diff.indexOf(arr2[i]), 1);
        }
    }

    return diff;
}


module.exports = difference;
