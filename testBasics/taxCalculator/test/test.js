//passing on their own but not all together

var code = require('../main');
var expect = require('chai').expect;

describe('Tax Calculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.calculate(1)).to.equal(0.1);
    expect(code.calculate(10)).to.equal(1);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.calculate(11)).to.equal(.77);
    // expect(code.calculate(20)).to.equal(1.4) 
  });

  it('should tax 5% on the third $10', function() {
    expect(code.calculate(21)).to.equal(1.05);
  });

  it('should tax 3% on the fourth $10', function() {
    expect(code.calculate(33)).to.equal(.99);
  });

});

//the first $10 is taxed 10%
//the second $10 is taxed 7%
//the third $10 is taxed 5%
//the fourth $10 is taxed 3%