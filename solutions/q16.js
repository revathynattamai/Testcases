//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]], [5, 6]];
const temp = [];

function flatten(arrArg) {
  //Write your code here
  var toString = Object.prototype.toString;
  var arrayTypeStr = '[object Array]';

  var result = [];
  var nodes = arrArg.slice();
  var node;

  if (!arrArg.length) {
    return result;
  }

  node = nodes.pop();

  do {
    if (toString.call(node) === arrayTypeStr) {
      nodes.push.apply(nodes, node);
    } else {
      result.push(node);
    }
  } while (nodes.length && (node = nodes.pop()) !== undefined);

  result.reverse(); // we reverse result to restore the original order
  return result;
}
const newArr = flatten(arr);

module.exports = newArr;
