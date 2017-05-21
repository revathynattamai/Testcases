// 6. Write a function to find the difference of two arrays?

function difference(arr1,arr2) {
// Write your code here

    var a = [], diff = [];

    for (var i = 0; i < arr1.length; i++) {
        a[arr1[i]] = true;
    }

    for (var i = 0; i < arr2.length; i++) {
        if (a[arr2[i]]) {
            delete a[arr2[i]];
        } else {
            a[arr2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(parseInt(k));
    }

    return(diff);
}


module.exports = difference;
