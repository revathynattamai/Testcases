let chai = require('chai');
let expect = chai.expect;
let add = require('../solutions/q0');


describe('Question 0 - Test code for add fucntion', function(){
  it ('Matches the desired output', function(done){
    // index(function(a,b){
      expect(add(2,3)).to.deep.equal(6);
      done();
    // })
  });
});