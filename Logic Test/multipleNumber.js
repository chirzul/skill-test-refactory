// Multiple 3 and 5
const multipleNumber = num => {
    let result = 0;
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            result += i;
        }
    }
    return result;
}

// Test Case
console.log(multipleNumber(10));
console.log(multipleNumber(20));