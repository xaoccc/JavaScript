function reverseAnArrayOfNumbers(n, arr) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(arr[i]);
    }
    console.log(result.reverse().join(' '));
}