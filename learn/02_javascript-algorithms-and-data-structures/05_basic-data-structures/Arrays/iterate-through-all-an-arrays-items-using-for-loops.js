function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let index = 0; index < arr.length; index++ ) {
    if (arr[index].indexOf(elem) == -1) {
      newArr.push(arr[index]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));