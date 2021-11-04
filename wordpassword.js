// Function to generate and display word to console - Word 1 - Random number
function Word1() {
        var r = Math.ceil(
            Math.random() * 9
        )
        return r;
}

// Define emotions string array
var emotions = [
    'Disgust',
    'Horror',
    'Cheerfulness',
    'Affection',
    'Disappointment',
    'Surprise',
]

// function to generate and display to console - Word 2 - random emotion
function Word2() {
    let n = emotions[
        Math.floor(
            Math.random() * 6
    )]
    return n;
}

var nouns = [
    'house',
    'mountain',
    'state',
    'ocean',
    'country',
    'building',
]

function Word3() {
    let n = nouns[
        Math.floor(
            Math.random() * 6
    )]
    return n;
}

var verbs = [
    'awake',
    'bite',
    'come',
    'see',
    'sleep',
    'throw',
]

function Word4() {
    let n = verbs[
        Math.floor(
            Math.random() * 6
    )]
    return n;
}

function passwordOut() {
    let p1 = Word1() + ' ';
    let p2 = Word2() + ' ';
    let p3 = Word3() + ' ';
    let p4 = Word4() + ' ';

    var out = p1 + p2 + p3 + p4;
    return out;
}

console.log(passwordOut());