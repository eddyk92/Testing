module.exports = {
	leapYear: function(year){
			if((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
			return 'This is a leap year';
			} else{
				return 'This is not a leap year';
		}
	}
}