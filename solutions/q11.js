// Q11. Write a function that can accept a string and return the same after arranging it into alphabetical order.
/* Example String: 'webmaster'
Expected Output: 'abeemrstw
*/

var string='webmaster';
//Write your code here

function alphabet_order(string)
  {
return string.split('').sort().join('');
  }
