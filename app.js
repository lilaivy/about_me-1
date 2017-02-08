'use strict';

console.log('Asked user for their name.');

var name = prompt('Hello! What is your name?');
console.log('User name is: ' + name);

console.log('\n');

//make default message for else console.log statement to keep it DRY


var firstAnswer = prompt('Thanks, ' + name + '!' + ' Is Yuval an Israeli citizen?').toLowerCase();
console.log('1) Asked ' + name + ' if Yuval is an Israeli citizen (true).');

if (firstAnswer === 'yes' || firstAnswer === 'y') {
  alert('You are correct, ' + name + '! Yuval has dual citizenship :)');
  console.log(name + ' answered correctly!');
} else if (firstAnswer === 'no' || firstAnswer === 'n') {
  alert('That is incorrect, ' + name + ' (and mildly offensive!). Yuval IS a citizen of Israel.');
  console.log(name + ' answered incorrectly!');
} else {
  alert('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var secondAnswer = prompt('Does Yuval have a degree from a higher learning institution?').toLowerCase();
console.log('2) Asked ' + name + ' if Yuval has a degree from a higher learning institution (false).');

if (secondAnswer === 'yes' || secondAnswer === 'y') {
  alert('That is incorrect, ' + name + ' (but you made me blush, if that helps) Libraries and the internet are free!');
  console.log(name +  ' answered incorrectly!');
} else if (secondAnswer === 'no' || secondAnswer === 'n') {
  alert('That is correct, ' + name + '! (much to the chagrin of my parents)');
  console.log(name +  ' answered correctly!');
} else {
  alert('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var thirdAnswer = prompt('Has Yuval been to the magical land of India?').toLowerCase();
console.log('3) Asked ' + name + ' if Yuval has been to India (true).');

if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
  alert('That is correct, ' + name + '! Several times -- including an illegal border crossing...');
  console.log(name +  ' answered correctly!');
} else if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  alert('That is incorrect, ' + name + '. Yuval is quite the cosmopolitan mofo ;)');
  console.log(name + ' answered incorrectly!');
} else {
  alert('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var fourthAnswer = prompt('Has Yuval ever been published?').toLowerCase();
console.log('4) Asked ' + name + ' if Yuval has ever been published (true).');

if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  alert('That is correct, ' + name + '! Yuval wrote short fiction under the alias The Marquis de Sheric.');
  console.log(name + ' answered correctly!');
} else if (fourthAnswer === 'no' || fourthAnswer === 'n') {
  alert('That is incorrect, ' + name + '. Yuval wrote short fiction under the alias The Marquis de Sheric. HAVE SOME RESPECT.');
  console.log(name + ' answered incorrectly!');
} else {
  alert('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var fifthAnswer = prompt('Has Yuval met some of the biggest names in CS/programming?').toLowerCase();
console.log('5) Asked ' + name + ' if Yuval has met some of the biggest names in CS/programming (true).');

if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  alert('That is correct, ' + name + '! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
  console.log(name + ' answered correctly!');
} else if (fifthAnswer === 'no' || fifthAnswer === 'n') {
  alert('How rude, ' + name + '! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
  console.log(name + ' answered incorrectly!');
} else {
  alert('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');


//sixth question
alert('Please guess the number I am thinking of. You will have four opportunities to guess this number.');
var myNum = 73;
console.log('Asked ' + name + ' to guess my number (' + myNum + ').');


for (var i = 0; i < 4; i++) {
  var userNum = prompt('Please enter your guess here:');
  userNum = Number(userNum);
  console.log(name + ' guessed: ' + userNum);
  var msg = '';

  //answer is correct
  if (userNum === myNum) {
    i++;
    //fix this to handle user answering correctly on first guess (singular)
    msg += 'You guessed correctly in ' + i + ' guesses, ' + name + '!';
    alert(msg);
    break;
  //number is too high
  } else if (userNum > myNum) {
    msg += 'Your guess is too high, ' + name + '!';
    alert(msg);
  //number is too low
  } else if (userNum < myNum) {
    msg += 'Your guess is too low, ' + name + '!';
    alert(msg);
  //not a number
  } else {
    alert('Come on, ' + name + '! Please enter a valid number.');
    console.log(name + ' did not provide a number! For shame.');
  }

  if (i === 3) {
    alert('You are all out of guesses :( Better luck next time!');
  }
}

