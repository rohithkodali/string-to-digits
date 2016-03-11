console.log('asdfasdfas'.convertToDigits() === false ? 'Pass' : 'Fail');
console.log('zero one'.convertToDigits() === 1 ? 'Pass' : 'Fail');
console.log('fourty'.convertToDigits() === 40 ? 'Pass' : 'Fail');
console.log('negative one hundred and nineteen'.convertToDigits() === -119 ? 'Pass' : 'Fail');
console.log('negative one hundred billion one'.convertToDigits() === -100000000001 ? 'Pass' : 'Fail');
console.log('negative three hundred twenty two billion two hundred ninety nine million one hundred twenty nine thousand one hundred twenty three'.convertToDigits() === -322299129123 ? 'Pass' : 'Fail');