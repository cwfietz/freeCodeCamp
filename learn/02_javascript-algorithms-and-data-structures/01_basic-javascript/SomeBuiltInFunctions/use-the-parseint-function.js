function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("7"));

// Testing
console.log(Testing(convertToInteger, "7"));

function Testing (funct, param1 ) {
  var expected = 7; // Doesn't work.
  var result = funct(param1);

  // stand in for assertion function
  if (expected == result) {
    return "Test passed";
  } else {
    return "Test failed";
  }
//   return assert.equal(expected, result).toString();
}