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
  	visaLengths = [13, 16, 19];
  	var visaLengthsFiltered = visaLengths.filter((x) => x === cardNumber.length);
  	if (visaLengthsFiltered.length > 0) {
  		return 'Visa';
  	}
  }

  // Detect MasterCard
  masterCardPrefixes = ['51', '52', '53', '54', '55'];
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
  		discoverLengths = [16, 19];
  		discoverLengthsFiltered = discoverLengths.filter((x) => x === cardNumber.length);
  		if (discoverLengthsFiltered.length > 0) {
        return 'Discover';
  		}
  	}
  }
  
  // Detect Maestro
  maestroPrefixes = ['5018', '5020', '5038', '6304'];
  var maestroPrefixesFiltered = maestroPrefixes.filter((x) => x === cardNumber.slice(0,4));
  if (maestroPrefixesFiltered.length > 0) {
  	maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  	maestroLengthsFiltered = maestroLengths.filter((x) => x === cardNumber.length);
  	if (maestroLengthsFiltered.length > 0) {
  		return 'Maestro';
  	}
  }
};