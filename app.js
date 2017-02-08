'use strict';

//maybe add a while loop to these for if they provided an invalid response?

console.log('Asked user for their name.');

var name = prompt('Hello! What is your name?');
console.log('User name is: ' + name);

console.log('\n');

var firstAnswer = prompt('Thanks, ' + name + '!' + ' Is Yuval an Israeli citizen?', 'Please enter "yes" or "no"').toLowerCase();
console.log('1) Asked ' + name + ' if Yuval is an Israeli citizen (true).');

if (firstAnswer === 'yes' || firstAnswer === 'y') {
  confirm('You are correct, ' + name + '! Yuval has dual citizenship :)');
  console.log(name + ' answered correctly!');
} else if (firstAnswer === 'no' || firstAnswer === 'n') {
  confirm('That is incorrect, ' + name + ' (and mildly offensive!). Yuval IS a citizen of Israel.');
  console.log(name + ' answered incorrectly!');
} else {
  confirm('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var secondAnswer = prompt('Does Yuval have a degree from a higher learning institution?', 'Please enter "yes" or "no"').toLowerCase();
console.log('2) Asked ' + name + ' if Yuval has a degree from a higher learning institution (false).');

if (secondAnswer === 'yes' || secondAnswer === 'y') {
  confirm('That is incorrect, ' + name + ' (but you made me blush, if that helps) Libraries and the internet are free!');
  console.log(name +  ' answered incorrectly!');
} else if (secondAnswer === 'no' || secondAnswer === 'n') {
  confirm('That is correct, ' + name + '! (much to the chagrin of my parents)');
  console.log(name +  ' answered correctly!');
} else {
  confirm('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var thirdAnswer = prompt('Has Yuval been to the magical land of India?', 'Please enter "yes" or "no"').toLowerCase();
console.log('3) Asked ' + name + ' if Yuval has been to India (true).');

if (thirdAnswer === 'yes' || thirdAnswer === 'y') {
  confirm('That is correct, ' + name + '! Several times -- including an illegal border crossing...');
  console.log(name +  ' answered correctly!');
} else if (thirdAnswer === 'no' || thirdAnswer === 'n') {
  confirm('That is incorrect, ' + name + '. Yuval is quite the cosmopolitan mofo ;)');
  console.log(name + ' answered incorrectly!');
} else {
  confirm('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var fourthAnswer = prompt('Has Yuval ever been published?', 'Please enter "yes" or "no"').toLowerCase();
console.log('4) Asked ' + name + ' if Yuval has ever been published (true).');

if (fourthAnswer === 'yes' || fourthAnswer === 'y') {
  confirm('That is correct, ' + name + '! Yuval wrote short fiction under the alias The Marquis de Sheric.');
  console.log(name + ' answered correctly!');
} else if (fourthAnswer === 'no' || fourthAnswer === 'n') {
  confirm('That is incorrect, ' + name + '. Yuval wrote short fiction under the alias The Marquis de Sheric. HAVE SOME RESPECT.');
  console.log(name + ' answered incorrectly!');
} else {
  confirm('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}

console.log('\n');

var fifthAnswer = prompt('Has Yuval met some of the biggest names in CS/programming?', 'Please enter "yes" or "no"').toLowerCase();
console.log('5) Asked ' + name + ' if Yuval has met some of the biggest names in CS/programming (true).');

if (fifthAnswer === 'yes' || fifthAnswer === 'y') {
  confirm('That is correct, ' + name + '! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
  console.log(name + ' answered correctly!');
} else if (fifthAnswer === 'no' || fifthAnswer === 'n') {
  confirm('How rude, ' + name + '! Yuval used to work for Specimen Magazine, where he was lucky enough to shoehorn his way into the Turing Award Ceremony. He interviewed the recipient of the award, Judea Pearl, as well as Leonard Kleinrock.');
  console.log(name + ' answered incorrectly!');
} else {
  confirm('Come on, ' + name + '! Please enter a valid "yes" or "no" response.');
  console.log(name + ' responded unintelligbly! For shame.');
}