var app = angular.module('myModule', []);
app.controller('myController', function($scope) {
	var timerId = 0;
	var words = [
		"gimme ",
		"wahhh ",
		"mine ",
		"more "
	];

	var phrases = [
		"and then ",
		"i want ",
		"ice cream "
	];

	var classes = [
		"blue",
		"red",
		"green",
		"highlight-yellow",
		"highlight-orange",
		"highlight-pink",
		"fontSize2",
		"fontSize3"
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
		if(timerId > 0) {
			stopTalking(timerId);
		} else {
			startTalking();
		}
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

	function startTalking() {
		timerId = setInterval(function() {
			addRandomFunction();
			$scope.$apply();
		}, 500);
	}

	function stopTalking(id) {
		clearInterval(id);
		timerId = 0;
	}
}); // ends controller


