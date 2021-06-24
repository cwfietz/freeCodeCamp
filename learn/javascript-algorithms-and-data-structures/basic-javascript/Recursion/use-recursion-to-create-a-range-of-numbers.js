function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    return [startNum];
  } else {
    const countArray = rangeOfNumbers(startNum + 1, endNum)
    countArray.unshift(startNum);
    return countArray;
  }
};

console.log( rangeOfNumbers(6, 5) );