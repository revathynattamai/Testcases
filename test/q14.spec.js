// Test Case for Q9.
let chai = require('chai');
let expect = chai.expect;

let index = require('../solutions/q14');

describe('Question 14 - Test code for correct output', function(){
  it ('Matches the desired output as per given input test case', function(done){
    expect(index(2)).to.deep.equal("*\n**");
    done();
  });

});
