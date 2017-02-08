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

var fourthAnswer = prompt('Has Yuval ever been published?', 'Please enter "yes" or "no"').toLowerCase();
console.log('4) Asked user if Yuval has ever been published (true).');

if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  confirm('That is correct! Yuval wrote short fiction under the alias The Marquis de Sheric.');
  console.log('User answered correctly!');
} else if (fourthAnswer === 'no' || fourthAnswer === 'n') {
  confirm('That is incorrect. Yuval wrote short fiction under the alias The Marquis de Sheric. HAVE SOME RESPECT.');
  console.log('User answered incorrectly!');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}

console.log('\n'); 

var fifthAnswer = prompt('Has Yuval met some of the biggest names in CS/programming?', 'Please enter "yes" or "no"').toLowerCase();
console.log('5) Asked user if Yuval has met some of the biggest names in CS/programming (true).');

if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  confirm('That is correct! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
  console.log('User answered correctly!');
} else if (fifthAnswer === 'no' || fifthAnswer === 'n') {
  confirm();
  console.log('How rude! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
} else {
  confirm('Please enter a valid "yes" or "no" response.');
  console.log('User responded unintelligbly! For shame.');
}