# Text to Digits
A JavaScript string prototype function that can convert text numbers names to corresponding digits.

This function will take standard-format English number names and return JavaScript integers. It will ignore any words that it cannot parse as numbers, so it is able to deal with cases like the word 'and' appearing in numbers.

### Basic Usage
```javascript
var myNum = 'Fourty';
myNum.convertToDigits(); // Returns 40

var myLargeNum = 'negative three hundred twenty two billion two hundred ninety nine million one hundred twenty nine thousand one hundred twenty three';
myLargeNum.convertToDigits(); // Returns -322299129123
```


