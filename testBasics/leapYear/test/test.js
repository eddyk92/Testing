var code = require('../main');
var expect = require('chai').expect;


describe("Leap Year", function(){
	it("should say 'This is a leap year' when ran", function(){
		expect(code.leapYear()).to.equal("This is a leap year!");
	});
});

//every year whose number is divisible by 4 is a leap year
//except for years which are both divisible by 100 and not divisible by 400
//1600 and 2000 are leap years, but century years 1700, 1800, 1900 are  ot