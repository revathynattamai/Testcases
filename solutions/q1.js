//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function (out) {
  //Write your code here

  let dd = new Date();
  m = dd.getMonth();
  d = dd.getDay();
  y = dd.getFullYear();
  if (m < 10)
    m = "0" + m;
  if (d < 10)
    d = "0" + d;
out(m + "/" + d + "/" + y);
}
