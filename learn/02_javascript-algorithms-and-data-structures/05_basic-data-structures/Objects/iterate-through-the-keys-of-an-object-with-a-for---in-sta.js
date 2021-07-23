function countOnline(usersObj) {
  // Only change code below this line
  var number = 0;
  for (let user in usersObj) {
    // console.log(user);
    // console.log(user.online);
    // console.log(user.hasOwnProperty('online'));
    // console.log(...user);
    // console.log(usersObj[user])
    // console.log(usersObj[user].online)
    
    if ( usersObj[user].online ) {
      number++;
      }
    }
  return number;
  // Only change code above this line
}

console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }))