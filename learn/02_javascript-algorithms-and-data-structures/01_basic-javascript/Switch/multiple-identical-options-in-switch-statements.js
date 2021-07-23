function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;

    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;

    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    
    default:
      answer = "Out of bounds!"
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
console.log( 1, sequentialSizes(1) );
console.log( 2, sequentialSizes(2) );
console.log( 3, sequentialSizes(3) );
console.log( 4, sequentialSizes(4) );
console.log( 5, sequentialSizes(5) );
console.log( 6, sequentialSizes(6) );
console.log( 7, sequentialSizes(7) );
console.log( 8, sequentialSizes(8) );
console.log( 9, sequentialSizes(9) );
console.log( 10, sequentialSizes(10) );
