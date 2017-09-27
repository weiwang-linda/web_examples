/* we need to define foure vars for this program
 * 1.random number: numRandom
 * 2.user input: numInput
 * 3.text need to display: textShow
 * */

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max-min+1)) + min;
}

var randomNumber = getRandomIntInclusive(1,100);
//alert(randomNumber);

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessField = document.querySelector('.guessField');
var guessSubmit = document.querySelector('.guessSubmit');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
	var userGuess =	Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = "Previous guesses: ";
	}
	guesses.textContent += userGuess + " ";
	if (userGuess === randomNumber) {
		lastResult.textContent = "Congratulations! You got the right!";
		lastResult.style.backgroundColor = 'green';
		lowOrHi.textContent = "";
		setGameOver();
	}else if (guessCount === 10) {
		lastResult.textContent = "!!!GAME OVER!!!";
		setGameOver();
	}else {
		lastResult.textContent = "Wrong!";
		lastResult.style.backgroundColor = 'red';
		if (userGuess < randomNumber) {
			lowOrHi.textContent = "Too low!";
		}else if (userGuess > randomNumber) {
			lowOrHi.textContent = "Too high!";
		}
	}

	guessCount++;
	guessField.value = "";
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = "start new game";
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame(){
	guesses.textContent = "";
	lastResult.textContent = "";
	lastResult.style.backgroundColor = 'white';
	lowOrHi.textContent = "";
	guessCount = 1;
	guessField.disabled = false;
	guessField.value = "";
	guessField.focus();
	guessSubmit.disabled = false;
	resetButton.parentNode.removeChild(resetButton);
	randomNumber = getRandomIntInclusive(1,100);
}
