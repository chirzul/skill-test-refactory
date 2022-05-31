// Map Array Data
const productArray = arr => {
    const result = [];
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
        total = total * arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        result.push(total / arr[i]);
    }
    return result;
}

// Test Case
console.log(productArray([12,20]));
console.log(productArray([3,27,4,2]));
console.log(productArray([13,10,5,2,9]));
console.log(productArray([16,17,4,3,5,2]));