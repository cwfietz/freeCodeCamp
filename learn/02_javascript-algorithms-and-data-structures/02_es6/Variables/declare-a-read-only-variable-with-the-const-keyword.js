function printManyTimes(str) {
  "use strict";

  // Only change code below this line
  const POSTFIX = " is cool!"
  const SENTENCE = str + POSTFIX;
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");
