// Nearest Fibonacci
const nearestFibonacci = arr => {
    let fibo = [0,1];
    fibo[2] = fibo[0] + fibo[1];
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    while (fibo[2] < total) {
        fibo[0] = fibo[1];
        fibo[1] = fibo[2];
        fibo[2] = fibo[0] + fibo[1];
    }
    result = Math.min(fibo[2] - total, total - fibo[1]);
    return result;
}

// Test Case
console.log(nearestFibonacci([15,1,3]));