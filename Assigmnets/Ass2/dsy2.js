//Assigment 2
var wl = ['J', 'U', 'M', 'P'];
var gl = ['_', '_', '_', '_'];

var gAttemps    = 0 , bAttemps = 0;
var gAttempsArr = [], bAttempsArr = [];

function guessLetter(letter) {

    var gg  = false;
    var mtg = false;

    for (var i = 0; i < wl.length; i++) {
        if (wl[i] == letter) {
            gl[i] = letter;
            gg = true;
        }
        if (gl[i] == '_') {
            mtg = true;
        }
    }
    if (gg) {
        console.log('Letter Found!');
        console.log(gl.join(''));
        if (!mtg) {
            console.log('Confratulation!');
        }
    } else {
        console.log('Sorry try again!');
    }
}

//bonus
function bonusOne() { }

function resetvars() {
    gAttemps = 0;
    bAttemps = 0; 

    gAttempsArr = [];
    bAttempsArr = [];
}

guessLetter('J');
guessLetter('U');
guessLetter('M');
guessLetter('T');
guessLetter('P');