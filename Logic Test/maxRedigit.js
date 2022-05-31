// Biggest Number
const maxRedigit = num => {
    if (num >= 100 && num <= 999) {
        result = num.toString()
                 .split('')
                 .sort()
                 .reverse()
                 .join('');
    } else {
        result = null;
    }
    return result;
}

// Test Case
console.log(maxRedigit(123));
console.log(maxRedigit(231));
console.log(maxRedigit(321));
console.log(maxRedigit(-1));
console.log(maxRedigit(0));
console.log(maxRedigit(99));
console.log(maxRedigit(1000));