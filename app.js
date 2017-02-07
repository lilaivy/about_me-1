'use strict';

//maybe add a while loop to these for if they provided an invalid response?

var firstAnswer = prompt('Is Yuval an Israeli citizen?', 'Please enter "yes" or "no"').toLowerCase();
console.log('1) Asked user if Yuval is an Israeli citizen (true).');

if (firstAnswer === 'yes' || firstAnswer === 'y') {
  confirm('You are correct! Yuval has dual citizenship :)');
  console.log('User answered correctly!');
} else if (firstAnswer === 'no' || firstAnswer === 'n') {
  confirm('That is incorrect (and mildly offensive!) Yuval IS a citizen of Israel.');
  console.log('User answered incorrectly!');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}

console.log('\n'); 

var secondAnswer = prompt('Does Yuval have a degree from a higher learning institution?', 'Please enter "yes" or "no"').toLowerCase();
console.log('2) Asked user if Yuval has a degree from a higher learning institution (false).');

if (secondAnswer === 'yes' || secondAnswer === 'y') {
  confirm('That is incorrect (but you made me blush, if that helps) Libraries and the internet are free!');
  console.log('User answered incorrectly!');
} else if (secondAnswer === 'no' || secondAnswer === 'n') {
  confirm('That is correct! (much to the chagrin of my parents)');
  console.log('User answered correctly!');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}

console.log('\n'); 

var thirdAnswer = prompt('Has Yuval been to the magical land of India?', 'Please enter "yes" or "no"').toLowerCase();
console.log('3) Asked user if Yuval has been to India (true).');

if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
  confirm('That is correct! Several times -- including an illegal border crossing...');
  console.log('User answered correctly!');
} else if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  confirm('That is incorrect. Yuval is quite the cosmopolitan mofo ;)');
  console.log('User answered incorrectly!');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}

console.log('\n'); 



//are there two of yuval?

//has yuval's work ever been published? 