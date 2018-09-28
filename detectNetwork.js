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
  	if (visaLengths.filter((x) => x === cardNumber.length)) {
  		return 'Visa';
  	}
  }

  // Detect MasterCard
  masterCardPrefixes = [51, 52, 53, 54, 55];
  if (masterCardPrefixes.filter((x) => x === cardNumber.slice(0,2))) {
  	if (cardNumber.length === 16) {
  		return 'MasterCard';
  	}
  }

  // Detect Discover
  discoverPrefixes = [6011, 644, 645, 646, 647, 648, 649, 65];
  if (discoverPrefixes.filter((x) => x === cardNumber.slice(0,2))) {
  	discoverLengths = [16, 19];
  	if (discoverLengths.filter((x) => x === cardNumber.length)) {
  		return 'Discover';
  	}
  }

  // Detect Maestro
  maestroPrefixes = [5018, 5020, 5038, 6304];
  if (maestroPrefixes.filter((x) => x === cardNumber.slice(0,2))) {
  	maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  	if (maestroLengths.filter((x) => x === cardNumber.length)) {
  		return 'Maestro';
  	}
  }
};