function numberModify (number) {
    let num = number.toString().split('').map(Number);
    let sum = num.reduce((a, b) => a + b);
    let average = sum / num.length;

    while (average <= 5) {
        num.push(9);
        sum += 9;
        average = sum / num.length;
    }

    console.log(num.join(''));
}