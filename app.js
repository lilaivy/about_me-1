'use strict';

var firstAnswer = prompt('Is Yuval an Israeli citizen?', 'Please enter "yes" or "no"').toLowerCase();

console.log('Asked user if Yuval is an Israeli citizen (true).');


//maybe add a while loop to this if they provided an invalid response?
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

