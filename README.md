# FizzBuzz 3, 5 in Nodejs API
Design an API which Return data as Fizz Buzz Pattern:
 1. A program that prints each number from 1 to 100 on a new line.
 2. For each multiple of 3, print "Fizz" instead of the number.
 3. For each multiple of 5, print "Buzz" instead of the number.
 4. For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
More on Fizz Buzz: https://en.wikipedia.org/wiki/Fizz_buzz

Requirements:
 1. Create an API which accepts a parameter “count” from user // http://localhost:8080/?count=5
 2. API should return data in an array, which should be output of Fizz Buzz program till count
 3. BONUS: Validations on User parameters
 4. BONUS: If you can host the API somewhere to check the functionality
 5. BONUS: Unit Tests & Integration Tests
Notes:API and Code should be clear and easily understandableAPI codebase should be properly structured and decoupledProper coding patterns should be followedWrite the codebase in such a manner that it will be easily maintainable
```

The package is unit tested with Mocha:

How run or test
```
npm install
npm start
npm test
```

And is statically checked with JSHint:

```
npm install
npm run jshint


