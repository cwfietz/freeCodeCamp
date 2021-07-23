function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for(var row = 0; row < arr.length; row++ ) {
    for(var column = 0; column < arr[row].length; column++){
      product *= arr[row][column];
    }
  }
  // Only change code above this line
  return product;
}

// multiplyAll([[1,2],[3,4],[5,6,7]])
// [[1], [2], [3]]
// [[1,2],[3,4],[5,6,7]]
// [[5,1],[0.2, 4, 0.5],[3, 9]]
console.log( multiplyAll( [[5,1],[0.2, 4, 0.5],[3, 9]] ) );

