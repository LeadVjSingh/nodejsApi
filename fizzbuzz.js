'use strict';

var multipleOf = function(factor, count) {
  return count % factor === 0;
};

var mappings = [
  { factor: 3, word: 'Fizz' },
  { factor: 5, word: 'Buzz' }
];

var fizzbuzz = function(count) {
  if ((typeof count) === 'undefined') {
    throw new TypeError('"' + count + '" is not a valid input');
  }
  var words = mappings
    .filter(function(mapping) {
      return multipleOf(mapping.factor, count);
    })
    .map(function(mapping) {
      return mapping.word;
    });
  if (words.length > 0) {
    return words.join('');
  } else {
    return count.toString();
  }
};

module.exports = fizzbuzz;
