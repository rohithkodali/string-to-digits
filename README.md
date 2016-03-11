# String to Digits
A JavaScript string prototype function that can convert words to their corresponding digits.

This function will take a standard written English number name and return the appropriate digits as an integer. It will ignore any words that it cannot parse as numbers, so it is able to deal with cases like the word 'and' appearing in numbers. If no digit names are found, it will return false.

### Basic Usage
```javascript
var myNum = 'Fourty';
var converted = myNum.convertToDigits(); 
console.log(converted); // Returns 40

var myLargeNum = 'negative three hundred twenty two billion two hundred ninety nine million one hundred twenty nine thousand one hundred twenty three';
var converted = myLargeNum.convertToDigits();
console.log(converted); // Returns -322299129123
```


