// Note this function has no means to rejects calls with 
// n > arr.length
function sum(arr, n) {
  // Only change code below this line
  if(n <=  0) {
    return 0;
  } else {
    return sum(arr, n-1) + arr[n-1];
  }
  // Only change code above this line
}

var myArray = [2, 3, 4, 5];
var n = 4;
var result = sum(myArray,n) 
console.log(result);