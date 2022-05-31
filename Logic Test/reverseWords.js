// Reverse Words
const reverseWords = words => {
    result = words.split(' ')
    for (let i = 0; i < result.length; i++) {
        let res = result[i].split('')
        if (res[0] == res[0].toUpperCase()) {
            res[0] = res[0].toLowerCase()
            res[res.length-1] = res[res.length-1].toUpperCase()
        }
        result[i] = res.join('')
    }
    result = result.reverse()
                   .join(' ')
                   .split('')
                   .reverse()
                   .join('')
    return result;
}

// Test Case
console.log(reverseWords("I am A Great human"));