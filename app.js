'use strict';

//maybe add a while loop to these for if they provided an invalid response?

var firstAnswer = prompt('Is Yuval an Israeli citizen?', 'Please enter "yes" or "no"').toLowerCase();

console.log('Asked user if Yuval is an Israeli citizen (true).');



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

var secondAnswer = prompt('Does Yuval have a degree from a higher learning institution?', 'Please enter "yes" or "no"').toLowerCase();

console.log('Asked user if Yuval has a degree from a higher learning institution (false).');

if (secondAnswer === 'yes' || secondAnswer === 'y') {
  confirm('That is incorrect (but you made me blush, if that helps). Libraries and the internet are free!');
  console.log('User answered incorrectly!');
} else if (secondAnswer === 'no' || secondAnswer === 'n') {
  confirm('That is correct! (much to the chagrin of my parents)');
  console.log('User answered correctly!');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}




//has yuval been to india? 

//are there two of yuval?

//has yuval's work ever been published? 