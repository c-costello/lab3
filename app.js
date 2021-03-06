'use strict';
var result = 0;
//Begin page with pop up to welcome
alert('Welcome to my website. How well do you know me?');

//Question one in regards to place of birth
function firstQuestion() {
  console.log(
    'variable for questionOne is undefined, waiting for input',
    questionOne
  );
  var questionOne = prompt(
    'Was I born in the United States? Please answer with Yes/Y/No/N.'
  ).toUpperCase();
  console.log('Input by user should be variable', questionOne);
  if (questionOne === 'YES' || questionOne === 'Y') {
    alert('Oh no! That is wrong! Better luck next time!');
  } else if (questionOne === 'NO' || questionOne === 'N') {
    alert('Wow! You know me so well!');
    result++;
  } else {
    alert('Please answer with Yes, Y, or No, N next time.');
  }
}
firstQuestion();
console.log('result', result);

//Question two in regards to ice cream
function secondQuestion() {
  console.log(
    'variable for questionTwo is undefined, waiting for input',
    questionTwo
  );
  var questionTwo = prompt(
    'Do I like vanilla ice cream? Please answer with Yes/Y/No/N.'
  ).toUpperCase();
  console.log('Input by user should be variable', questionTwo);
  if (questionTwo === 'YES' || questionTwo === 'Y') {
    alert('Wow! You know me so well!');
    result++;
  } else if (questionTwo === 'NO' || questionTwo === 'N') {
    alert('Oh no! That is wrong! Better luck next time!');
  } else {
    alert('Please answer with Yes, Y, or No, N next time.');
  }
}
secondQuestion();
console.log('result', result);

//Question three in regards to cats
function thirdQuestion() {
  console.log(
    'variable for questionTwo is undefined, waiting for input',
    questionThree
  );
  var questionThree = prompt(
    'Do I like cats? Please answer with Yes/Y/No/N.'
  ).toUpperCase();
  console.log('Input by user should be variable', questionThree);
  if (questionThree === 'YES' || questionThree === 'Y') {
    alert('Wow! You know me so well!');
    result++;
  } else if (questionThree === 'NO' || questionThree === 'N') {
    alert('Oh no! That is wrong! Better luck next time!');
  } else {
    alert('Please answer with Yes, Y, or No, N next time.');
  }
}
thirdQuestion();
console.log('result', result);

//Question four in regards to coffee
function fourthQuestion() {
  console.log(
    'variable for questionFour is undefined, waiting for input',
    questionFour
  );
  var questionFour = prompt(
    'Do I enjoy the aroma and taste of coffe? Please answer with Yes/Y/No/N.'
  ).toUpperCase();
  console.log('Input by user should be variable', questionFour);
  if (questionFour === 'YES' || questionFour === 'Y') {
    alert('Oh no! That is wrong! Better luck next time!');
  } else if (questionFour === 'NO' || questionFour === 'N') {
    alert('Wow! You know me so well!');
    result++;
  } else {
    alert('Please answer with Yes, Y, or No, N next time.');
  }
}
fourthQuestion();
console.log('result', result);

//Question five in regards to travelling
function fifthQuestion() {
  console.log(
    'variable for questionTwo is undefined, waiting for input',
    questionFive
  );
  var questionFive = prompt(
    'Have I ever been to Chicago? Please answer with Yes/Y/No/N.'
  ).toUpperCase();
  console.log('Input by user should be variable', questionFive);
  if (questionFive === 'YES' || questionFive === 'Y') {
    alert('Oh no! That is wrong! Better luck next time!');
  } else if (questionFive === 'NO' || questionFive === 'N') {
    alert('Wow! You know me so well!');
    result++;
  } else {
    alert('Please answer with Yes, Y, or No, N next time.');
  }
}
fifthQuestion();
console.log('result', result);

//Question six. Guessing game for number with only 4 tries
function sixthQuestion() {
  var numberGuess = parseInt(
    prompt('Guess a number I am thinking of between 1 and 100')
  );
  var counter = 0;
  while (numberGuess !== 42 && counter < 3) {
    if (numberGuess > 42) {
      numberGuess = parseInt(prompt('Your guess is too high. Try again.'));
      counter++;
    } else if (numberGuess < 42) {
      numberGuess = parseInt(prompt('Youre guess is too low. Try again.'));
      counter++;
    } else {
      numberGuess = parseInt(prompt('Please pick a numerical value'));
    }
  }

  if (numberGuess === 42) {
    alert('Congratulations! You got it!');
    result++;
  } else {
    alert('Too bad! You are out of tries!');
  }
}
sixthQuestion();
console.log('results', result);

//Question seven. Create array for guessing which states I have visited. Six tries.
function seventhQuestion() {
  var states = [
    'WASHINGTON',
    'IDAHO',
    'CALIFORNIA',
    'ILLINOIS',
    'NEW JERSEY',
    'TEXAS',
    'ARKANSAS',
    'NEW MEXICO'
  ];
  var stateGuesses = prompt('Can you guess which states I have visited?')
    .toUpperCase;
  var isThisCorrect = false;
  var guessesForStates = 0;
  while (isThisCorrect === false && guessesForStates < 5) {
    for (var i = 0; i < states.length; i++)
      if (states[i] === stateGuesses) {
        isThisCorrect = true;
      }
    if (isThisCorrect === false) {
      stateGuesses = prompt('Guess Again!').toUpperCase;
      guessesForStates++;
    }
  }
  if (isThisCorrect === true) {
    alert('Yay! You got it!');
    result++;
  }
}
seventhQuestion();
console.log('result', result);

//Result for entire game questions
if (result > 4) {
  alert('Result:' + result + '/' + '7' + ' .Wow! You know me pretty well.');
} else {
  alert(
    'Result:' +
      result +
      '/' +
      '7' +
      ' .Aww. Maybe you can get to know me better'
  );
}
