var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    ++count;
    break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    --count;
  }

  var bet = "";
  if (count>0){
    bet = "Bet";
  } else {
    bet = "Hold";
  }
  
  // console.log(count + " " + bet);
  return count + " " + bet;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(9),cc(2); cc(3); cc(7); cc('K'); cc('A');
count = 0;
console.log('\n');
cc(2),cc(3); cc(4); cc(5); cc(6);
count = 0;
console.log('\n');
cc(7),cc(8); cc(9);
count = 0;
console.log('\n');
cc(10); cc("J"); cc("Q"); cc('K'); cc('A');
count = 0;
console.log('\n');
cc(3); cc(7); cc("Q"); cc('8'); cc('A');
count = 0;
console.log('\n');
cc(2); cc("J"); cc(9); cc(2); cc(7);
count = 0;
console.log('\n');
cc(2); cc(2); cc(10);
count = 0;
console.log('\n');
cc(3); cc(2); cc("A"); cc(10); cc("K");
count = 0;
console.log('\n');