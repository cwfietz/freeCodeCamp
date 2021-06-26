let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

console.log(foods);
// Only change code below this line
// delete foods.oranges;
let foodItems = ['oranges', 'plums', 'strawberries']
for (let index = 0; index < foodItems.length; index++) {
  console.log(index);
  delete foods[foodItems[index]];
}
// Only change code above this line
console.log(foods);

