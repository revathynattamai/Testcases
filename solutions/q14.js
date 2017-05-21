//Q14.  Write a program to build a (pyramid) of "*" for a given number of rows. for example rows = 6 ?

//Write your code here
function generatePyramid(a) {
	var arr = [];
	for (var i = 1; i<=a; i++) {
		var str='';
		for (var j = 0; j < i; j++) {
			str+='*'
		}
		if(str) arr.push(str);
	}   
	return arr.join('\n');
}

module.exports = generatePyramid;