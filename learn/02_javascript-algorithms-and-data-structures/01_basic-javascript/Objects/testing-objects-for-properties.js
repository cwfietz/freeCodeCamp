function checkObj(obj, checkProp) {
  // Only change code below this line
  if ( obj.hasOwnProperty(checkProp) ) {
    return obj[checkProp];
  }
  else {
    return "Not Found";
  }
  // Only change code above this line
}

// Test your code by modifying these values
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

console.log( checkObj(myObj, "gift"));
console.log( checkObj(myObj, "pet"));
console.log( checkObj(myObj, "house"));