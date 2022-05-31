// Find Middle Alphabet
const findMiddleAlphabet = (first, last) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = alphabet.split(first.toUpperCase())[1]
                 .split(last.toUpperCase())[0];
    if (letter.length % 2 == 1) {
        position = letter.length / 2;
        result = letter.substring(position, position+1);
    } else {
        position = letter.length / 2 - 1;
        result = letter.substring(position, position+2);
    }
    return result;
}

// Test Case
console.log(findMiddleAlphabet("Q", "U"));
console.log(findMiddleAlphabet("R", "U"));
console.log(findMiddleAlphabet("T", "Z"));
console.log(findMiddleAlphabet("Q", "Z"));