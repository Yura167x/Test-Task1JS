'use strict';

var b = 5;

var a = prompt('Guess the number from 0 to 9:');
a = +a;

if( a === b ) {
    alert('Imposible!');
} 

while (a < 5) {
    alert('The number must be larger.');
    var a = prompt('Guess the number from 0 to 9:');
    a = +a;
    if ( a === b ) {
        alert('You guessed the number.');
        break;
    }
}

while (a > 5) {
        alert('The number should be less.');
        var a = prompt('Guess the number from 0 to 9:');
        a = +a;
        while ( a < 5 ) {
            alert('The number must be larger.');
            var a = prompt('Guess the number from 0 to 9:');
            a = +a;
            continue;
        } 
        if ( a === b ) {
            alert('You guessed the number.');
            break;
    } 
} 

console.log('The hidden number -', a);