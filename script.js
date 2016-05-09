var app = angular.module('myModule', []);
app.controller('myController', function($scope) {

	var words = [
		"gimme",
		"wahhh",
		"mine",
		"more"
	];

	var phrases = [
		"and then",
		"i want",
		"ice cream"
	];

	var classes = [
		"blue",
		"red",
		"green",
		"highlight-yellow",
		"highlight-orange",
		"highlight-pink"
	];

	var allFunctions = [
		addWord,
		addPhrase,
		addWordDecor,
		addPhraseDecor
	];

	$scope.arr = [];

	$scope.addWord = function() {
		addWord();
	};

	$scope.addPhrase = function() {
		addPhrase();
	};

	$scope.addWordDecor = function() {
		addWordDecor();
	};

	$scope.addPhraseDecor = function() {
		addPhraseDecor();
	};

	$scope.addRandomFunction = function() {
		addRandomFunction();
	}

	function addWord() {
		var newWord = {};
		newWord.text = words[Math.floor(Math.random() * words.length)];
		$scope.arr.push(newWord);
	}

	function addPhrase() {
		var newPhrase = {};
		newPhrase.text = phrases[Math.floor(Math.random() * phrases.length)];
		$scope.arr.push(newPhrase);
	}

	function addWordDecor() {
		var newWordDecor = {};
		newWordDecor.text = words[Math.floor(Math.random() * words.length)];
		newWordDecor.style1 = classes[Math.floor(Math.random() * classes.length)];
		newWordDecor.style2 = classes[Math.floor(Math.random() * classes.length)];
		$scope.arr.push(newWordDecor);
	}

	function addPhraseDecor() {
		var newPhraseDecor = {};
		newPhraseDecor.text = phrases[Math.floor(Math.random() * phrases.length)];
		newPhraseDecor.style1 = classes[Math.floor(Math.random() * classes.length)];
		newPhraseDecor.style2 = classes[Math.floor(Math.random() * classes.length)];
		$scope.arr.push(newPhraseDecor);
	}

	function addRandomFunction() {
		var randomFunction = allFunctions[Math.floor(Math.random() * allFunctions.length)];
		randomFunction();
	}
}); // ends controller




// var id = setInterval(count, 500, ??[opt.]); > number in ms, will execute the function every 1/2 minute
// clearInterval(id); > turns setInterval off
// var i = 0;
// function count() {
// 	return ++i;
// }
// array of defined functions by reference
// interval(randomFx, 1000), e.g.