 
 'use strict';

var fizzbuzz = require('./fizzbuzz');
 var fizzbuzzapi = function(count) {
   var arrFizzBuzz = [];
  for (var i = 1; i <= count; i ++) {
    console.log(fizzbuzz(i)+'\n');
    arrFizzBuzz.push(fizzbuzz(i));
  }
  return arrFizzBuzz;
}
module.exports = fizzbuzzapi;