// Alternate Case
const alternateCase = str => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else if (str[i] == str[i].toLowerCase()) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

// Test Case
console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World!"));