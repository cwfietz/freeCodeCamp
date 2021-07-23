function convertToInteger(str) {
  var number = parseInt(str, 2);
  return number;
}

function convertToIntegerRad(str, rad) {
  var number = parseInt(str, rad);
  return number;
}

function convertToAnInteger(str, rad) {
  if (rad != 2) {
    return convertToIntegerRad(str, rad);
  } else {
    return convertToInteger(str);
  }
}

// console.log( NaN.toString() );

// console.log( convertToAnInteger("111001", 14) );

// Testing
var arg1, arg2, expected;

var testCases = [
  ["10011", 2, 19],
  ["111001", 2, 57],
  ["JamesBond", 2, NaN],
  ["111001", 36, 62192449],
  ["111001", 14, 578985]
  ];

for (var i = 0; i < testCases.length; i++) {
  arg1 = testCases[i][0];
  arg2 = testCases[i][1];
  expected = testCases[i][2];
  // console.log( arg1, arg2, expected );
  // console.log( convertToAnInteger(arg1, arg2) );
  console.log( Testing(convertToAnInteger, expected, arg1, arg2) );
}

function Testing(funct, expected, param1, param2) {
  var result = funct(param1, param2);

  // stand in for assertion function
  if (expected.toString() == result.toString()) {
    return "Test passed";
  } else {
    return "Test failed";
  }
}