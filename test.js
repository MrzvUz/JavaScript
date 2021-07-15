// Variables.
var monster1 = "Hello", monster2 = "World", monster3 = "Everyone";

// Strings.

// Objects in JavaScript.
var myObject = {}
var animal = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
}
animal1 = animal // Creates a reference and doesn't make a copy of object animal. If animal1 item changed animal item will change too.
animal2 = JSON.parse(JSON.stringify(animal)); // Creates a copy of the object animal.



// Arrays [Lists]
var myArray = [];
var myArray = [0, 1, 2, "string0", "string1", true, false];
var dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', "Saturday", "Sunday"];




var longString = "Four score\
and seven years ago\
our fathers brought forth\
on this continent\
a new nations.";


// Commenting in JavaScript.
// = Line commenting
/* Block commenting.
You can write
comments in
multiple lines.
*/



// Regular expressions in JavaScript.
var string1 = "This is the longest string ever"
var regex = /this/; // Between forward slashes is called regular expressions.

console.log( regex.test(string1) ); //console.log = prints out the output browser console.
regex = /this/i;


