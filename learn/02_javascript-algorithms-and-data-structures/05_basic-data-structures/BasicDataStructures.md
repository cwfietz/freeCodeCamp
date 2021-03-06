# BasicDataStructures.txt
================================================================================
1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890
         1         2         3         4         5         6         7         8         9         0

// ======================================================
## Array methods
// ======================================================

### push()
// ======================================================
arrayName.push(list of items to be added to the end (right) of the array)

### unshift()
// ======================================================
arrayName.unshift(list of items to be added to the beginning (left) of the array)

### pop()
// ======================================================
let varName = arrayName.pop()
// varName is the item that was at the end (right) of arrayName.
// arrayName no longer contains the item that was at the end (right)

### shift()
// ======================================================
let varName = arrayName.shift()
// varName is the item that was at the beginning (left) of the array
// arrayName no longer contains the item that was at the beginning (left) of the array)


### splice()
// ======================================================
let varName = arrayName.splice(startIndex, numberToRemove, list of items to add at startIndex)

// varName is array of items removed
// arrayName no longer has items from starIndex (zero indexed) to 
// starIndex+numberToRemove but has list of items to add at starIndex in
// there place.


### slice()
// ======================================================
let newArrayName = arrayName.slice(startIndex, endIndex)
// newArrayName is an array of elements from startIndex to one less
// than endIndex.


### … (spread operator)
// ======================================================
spreads the contents of an array out to be used in place of a list of items.
e.g.
let newArray = […oldArray]
// newArray is a copy of oldArray.
let longerArray = [item1, item2, …oldArray, item3, etc.]
// longerArray includes all the items including the items from oldArray.


### indexOf()
// ======================================================
let indexNumber = arrayName.indexOf(item that may or may not be in arrayName)
// if the item is not in the array -1 is returned.


// One can iterate through the items in an array using for loops
e.g.
for (let index = 0; index < arr.length; index++ ) {
	// statements using arr[index]
}


// Arrays can have arbitrary length and have arbitrary depth. Multidimentional arrays don’t need to be square.



// ======================================================
## Objects as data structures
// ======================================================


### key-value pairs
// ======================================================
key value pairs can be added to existing objects using dot or bracket notation. Variables of type string can be used within brackets.
e.g.
foods.bananas = 13;
foods['grapes'] = 35;
let fruit = 'strawberries';
foods[fruit] = 27;

{ apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27 }

// ======================================================
key value pairs can be changed in existing objects using dot or bracket notation. 
e.g.
userActivity.data.online = 45;
userActivity['data']['online'] = 45;

### delete
// ======================================================
Deletes a property (key-value pair) from an object.
Can use dot or bracket notation.
delete objectName.property;
delete objectName[‘property’];
delete objectName[variable that corresponds to a property]


### hasOwnProperty() -OR- ‘property’ in objectName
// ======================================================
returns true if an object has a property.
returns false otherwise.


### for in statement
// ======================================================

for (let key in objectName) {    
    if ( objectName[key].property ) { // must use objectName[key] to get to
		// statements		   // the values or properties of the values.
      }
}


### Object.keys(objectName);
// ======================================================
returns an array of all the keys in objectName.

objectName.property.property. … .push() will add to an array that is a value of a property.

the Data Structures lessons located in the Coding Interview Prep section of the curriculum also cover the ES6 Map and Set objects, both of which are similar to ordinary objects but provide some additional features.