// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for(var index = 0; index < contacts.length; index++) {
        if (contacts[index].firstName == name) {
            if (contacts[index].hasOwnProperty(prop) ) {
                return contacts[index][prop];
            } else {
                return "No such property";
            }
        }
    }
  return "No such contact";
// Only change code above this line
}

// Test cases:
// =======================
// "Akira", "likes"
// "Kristian", "lastName"
// "Sherlock", "likes"
// "Harry","likes"
// "Bob", "number"
// "Bob", "potato"
// "Sherlock", "number"
// "Akira", "address"
console.log(lookUpProfile("Kristian", "lastName"));

