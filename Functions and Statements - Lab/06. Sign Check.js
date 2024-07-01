function signCheck(numOne, numTwo, numThree ) {
    negative = (numOne < 0 && numTwo < 0 && numThree < 0) || (numOne > 0 && numTwo > 0 && numThree < 0) || (numOne < 0 && numTwo > 0 && numThree > 0) || (numOne > 0 && numTwo < 0 && numThree > 0)
    // Spare 4 console logs:
    if (negative) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
}



