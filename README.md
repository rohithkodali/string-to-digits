# Text to Digits
A JavaScript string prototype function that can convert text numbers to their corresponding digits.

This function will take standard written English number names and return the number's digits. It will ignore any words that it cannot parse as numbers, so it is able to deal with cases like the word 'and' appearing in numbers.

### Basic Usage
```javascript
var myNum = 'Fourty';
myNum.convertToDigits(); // Returns 40

var myLargeNum = 'negative three hundred twenty two billion two hundred ninety nine million one hundred twenty nine thousand one hundred twenty three';
myLargeNum.convertToDigits(); // Returns -322299129123
```


