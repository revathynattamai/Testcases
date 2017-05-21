//Q12. Write a function that accepts two arguments, first as string and other as a letter and the function will count the number of occurrences of the specified letter within the string.
/* Sample arguments: 'gmail.com', 'o'
Expected output: 1
*/

function char_count(str, letter) {
    //Write your code here
    let count = 0;

    for (var x = 0; x < str.length; x++) {
        if (letter.indexOf(str[x]) !== -1) {
            count += 1;
        }
    }
    return count
}
module.exports = char_count;
