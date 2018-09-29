// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.


  // Detect Switch
  var switchPrefixesFour = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var switchPrefixesSix = ['564182', '633110'];
  var switchPrefixesFourFilterd = switchPrefixesFour.filter((x) => x === cardNumber.slice(0,4));
  var switchPrefixesSixFilterd = switchPrefixesSix.filter((x) => x === cardNumber.slice(0,6));
  if (switchPrefixesFourFilterd.length > 0 || switchPrefixesSixFilterd.length > 0) {
  	var switchLengths = [16, 18, 19];
  	var switchLengthsFiltered = switchLengths.filter((x) => x === cardNumber.length);
  	if (switchLengthsFiltered.length > 0) {
  		return 'Switch';
  	}
  }

  // Detect Diner's Club
  if (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') {
  	if (cardNumber.length === 14) {
  		return 'Diner\'s Club';
  	}
  }

  // Detect American Express
  else if (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') {
  	if (cardNumber.length === 15) {
  		return 'American Express';
  	}
  }

  // Detect Visa
  else if (cardNumber[0] === '4') {
  	var visaLengths = [13, 16, 19];
  	var visaLengthsFiltered = visaLengths.filter((x) => x === cardNumber.length);
  	if (visaLengthsFiltered.length > 0) {
  		return 'Visa';
  	}
  }

  // Detect MasterCard
  var masterCardPrefixes = ['51', '52', '53', '54', '55'];
  var masterCardPrefixesFiltered = masterCardPrefixes.filter((x) => x === cardNumber.slice(0,2));
  if (masterCardPrefixesFiltered.length > 0) {
  	if (cardNumber.length === 16) {
  		return 'MasterCard';
  	}
  }

  // Detect Discover
  discoverPrefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  for (var i = 0; i < discoverPrefixes.length; i++) {
    if (discoverPrefixes[i] === cardNumber.slice(0, discoverPrefixes[i].length)) {
  		var discoverLengths = [16, 19];
  		var discoverLengthsFiltered = discoverLengths.filter((x) => x === cardNumber.length);
  		if (discoverLengthsFiltered.length > 0) {
        return 'Discover';
  		}
  	}
  }
  
  // Detect Maestro
  var maestroPrefixes = ['5018', '5020', '5038', '6304'];
  var maestroPrefixesFiltered = maestroPrefixes.filter((x) => x === cardNumber.slice(0,4));
  if (maestroPrefixesFiltered.length > 0) {
  	var maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  	var maestroLengthsFiltered = maestroLengths.filter((x) => x === cardNumber.length);
  	if (maestroLengthsFiltered.length > 0) {
  		return 'Maestro';
  	}
  }

  // Detect China UnionPay
  if (Number(cardNumber.slice(0,6)) >= 622126 && Number(cardNumber.slice(0,6)) <= 622925) {
  	var chinaLengths = [16, 17, 18, 19];
  	var chinaLengthsFiltered = chinaLengths.filter((x) => x === cardNumber.length);
  	if (chinaLengthsFiltered.length > 0) {
  		return 'China UnionPay';
  	}
  }
  var chinaPrefixes = ['624', '625', '626', '6282', '6283', '6284', '6285', '6286', '6287', '6288'];
  for (var i = 0; i < chinaPrefixes.length; i++) {
  	if (chinaPrefixes[i] === cardNumber.slice(0, chinaPrefixes[i].length)) {
  		var chinaLengths = [16, 17, 18, 19];
  		var chinaLengthsFiltered = chinaLengths.filter((x) => x === cardNumber.length);
  		if (chinaLengthsFiltered.length > 0) {
  			return 'China UnionPay';
  		}
  	}
  }
};