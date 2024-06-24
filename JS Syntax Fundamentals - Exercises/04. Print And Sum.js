function printAndSum(start, end) {
    let sum = 0;
    let result = '';

    for (let i = start; i <= end; i++) {
        sum += i;
        result += i + ' ';
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}
