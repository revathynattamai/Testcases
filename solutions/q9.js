//Q9. Write a function to return the list of properties (keys) of given object?

//Write your code here

function keys(obj) {
    // return Object.keys(obj);
    var keys = [];
    for(key in obj) {
        keys.push(key);
    }
    return keys;
}

module.exports = keys;