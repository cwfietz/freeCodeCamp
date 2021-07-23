function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor( Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

console.log( randomRange(3, 300) );

// Testing
console.log(Testing(randomRange, 3, 300));
function Testing (funct, param1, param2 ) {
  // var expected = 0;
  var result = funct(param1, param2);

  // stand in for assertion function
  if (param1 <= result && result <= param2) {
    return "Test passed";
  } else {
    return "Test failed";
  }
}

