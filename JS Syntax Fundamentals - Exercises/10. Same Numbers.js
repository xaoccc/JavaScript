function sameNumbers(number) {
    let numberString = number.toString();
    let sum = 0;
    let isSame = true;

    for (let i = 0; i < numberString.length; i++) {
        let currentNumber = Number(numberString[i]);
        sum += currentNumber;

        if (i > 0 && currentNumber !== Number(numberString[i - 1])) {
            isSame = false;
        }
    }

    console.log(isSame);
    console.log(sum);
}