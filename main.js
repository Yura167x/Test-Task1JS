'use strict';

var a = prompt('Guess the number from 0 to 9:');
a = +a;

if (a === 2) {
    alert('You guessed the number.');
}

while (a !== 2) {
    alert('You guessed wrong, try again.');
    var a = prompt('Please enter a number between 0 and 9.');
    a = +a;
    if (a === 2) {
        alert('You guessed the number.');
        break;
    }
}
