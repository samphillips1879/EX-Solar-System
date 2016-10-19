

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];





/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");



el.innerHTML += "<br><h2>All planets: </h2>";

planets.forEach(function(item) {
	el.innerHTML += item + "<br>";
});






// Use the map method to create a new array where the first letter of each planet is capitalized


el.innerHTML += "<br><h2>Capitalized planets: </h2>";

var capPlanets = planets.map(function(planet) {
	let prog = planet.split("");
	let progCapLetter = prog[0].toUpperCase();
	prog[0] = progCapLetter;
	prog = prog.join("");
	return prog;

});

capPlanets.forEach(function(item) {
	el.innerHTML += item + "<br>";
});





// Use the filter method to create a new array that contains planets with the letter 'e'

el.innerHTML += "<br><h2>Planets with an 'e' in them: </h2>";

var filtered = capPlanets.filter(function(planet) {
	planet = planet.toLowerCase();
	return planet.indexOf("e") !== -1;
});

// console.log("filtered", filtered);


filtered.forEach(function(item) {
	el.innerHTML += item + "<br>";
});





// Use the reduce method to create a sentence from the words in the following array



el.innerHTML += "<br><h2>Word array reduced to a sentence: </h2>";



var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];


var sentence = words.reduce(function(prev, curr) {
	return prev + " " + curr;
});


el.innerHTML += sentence + ".";











