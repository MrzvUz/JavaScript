// Variables.
var monster1 = "Hello", monster2 = "World", monster3 = "Everyone";

// Strings.

// Objects in 
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
var myArray = []
var dayOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", 'Friday', "Saturday", "Sunday"];



