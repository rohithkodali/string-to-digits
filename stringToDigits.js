String.prototype.convertToDigits = function(){
	var words = this.toLowerCase().split(' '),
		placeCount = 0,
		digits = 0,
		noNumber = true,
		negative = words[0] == 'negative' ? true : false,
		numberNames = {
    		ones: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
    		tens: ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    		large: ['thousand', 'million', 'billion', 'trillion', 'quadrillion'] // Number.MAX_VALUE is around 9 quadrillion
		};
	for(var i = 0; i < words.length; i++) {
		var ones = numberNames.ones.indexOf(words[i]),
			tens = numberNames.tens.indexOf(words[i]), 
			large = numberNames.large.indexOf(words[i]);
		if(ones > -1)
			placeCount += ones;
		if(tens > -1)
			placeCount += 10*(tens+2);
		if(words[i] == 'hundred')
			placeCount *= 100;
		if(large > -1) {
			placeCount *= Math.pow(1000, large+1),
			digits += placeCount, 
			placeCount = 0;
		}
		noNumber = ones > -1 || tens > -1 || words[i] == 'hundred' || large > -1 ? false : true;
	}
	if(noNumber)
		return false;
	if(placeCount > 0 && placeCount < 1000)
		digits += placeCount;
	if(negative)
		digits *= -1;
	return digits;
}