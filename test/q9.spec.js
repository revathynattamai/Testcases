// Test Case for Q9.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q9');

var obj = {
    name: 'revathy',
    number: 1
};

describe('Question 9 - Test code for correct output', function(){
  it ('Matches the desired output as per given input test case', function(done){
    expect(index(obj)).to.deep.equal(['name', 'number']);
    done();
  });

});
