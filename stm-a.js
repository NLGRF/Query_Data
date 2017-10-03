var sentimentAnalysis = require('sentiment-analysis');
 /*
sentimentAnalysis('Dinosaurs are awesome!'); // +0.4 
sentimentAnalysis('Everything is stupid');  // -0.2 
sentimentAnalysis('Windows is very unstable');  // -0.2 
sentimentAnalysis('London is gloomy today because of all the smog');  // -0.4 
sentimentAnalysis('I am so grateful for all the presents, thank you!');  // +0.5 
sentimentAnalysis('Really enjoying the warm weather');  // +0.3 
sentimentAnalysis('It was a catastrophic disaster');  // -0.6 

// Debug
console.log(sentimentAnalysis('I Love You'))
*/
// Test

var word = ["Dinosaurs are awesome!", "Everything is stupid",
			"Windows is very unstable","London is gloomy today because of all the smog",
			"I am so grateful for all the presents, thank you!","Really enjoying the warm weather",
			"It was a catastrophic disaster","I Love You"];

for (var i = word.length - 1; i >= 0; i--) {
	console.log('sentimentAnalysis : ' + word[i])
	console.log(sentimentAnalysis(word[i]))
	//console.log('sentimentAnalysis : ' + word[i] + ' => ' + sentimentAnalysis(word[i]))
}