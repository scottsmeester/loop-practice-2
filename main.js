var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

var i;
for (i = 0; i < (animals.length - 1); i++) {
	console.log(animals[i] + "\n");
}
console.log("\n");


for (i = 0; i < animals.length; i = i + 2) {
	console.log(animals[i] + "\n");
}
console.log("\n");


var animalsReversed = animals.reverse();
for (i = 0; i < animals.length; i++) {
	console.log(animalsReversed[i] + "\n");
}
console.log("\n");

animals = animals.reverse();
for (i = 0; i < animals.length; i++) {
	console.log(animals[i] + "\n");
	if (i !== 0 && i !== (animals.length - 1)) {
		console.log(animals[i] + "\n");
	}
}