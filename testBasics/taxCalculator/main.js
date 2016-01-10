module.exports = {
		calculate: function(dollars){
			if(dollars <= 10){
				return dollars * .10;
		  } else if(dollars >=11){ 
				return dollars * .07;
		  } else if(dollars >=21){
				return dollars * 0.05;
		  } else if(dollars >=31){
		  		return dollars * .03;
		  }
	}
}

