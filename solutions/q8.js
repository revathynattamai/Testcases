//Q8. Write a program which accepts email id as an input, which verified the following rules:-
// 1) Should contain Uppercase (A-Z) and lowercase (a-z) English letters.
// 2) Should contain Digits (0-9).
// 3) Should not contain special haracters ! # $ % & ' * + - / = ? ^ ` { | } ~
// 4) Should contain character period or dot provided that it is not the first or last character and it will not come one after the other.

function valid_email(str) {
    //Write your code here
    

    const sy = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?@";
    const alnum = "^[a-zA-Z0-9]*$";

    for (var i = 0; i < str.length; i++) {
            if (alnum.indexOf(str.charAt(i)) == -1) {
                return true;
            }
    }
                

    if ((sy.indexOf(str.charAt(0)) == 2) || (sy.indexOf(str.charAt(str.length) == 2))) {
        return false;
    }

    
}
module.exports = valid_email;
