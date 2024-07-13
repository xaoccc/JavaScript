function signCheck(numOne, numTwo, numThree ) {
    let negative = (numOne < 0 && numTwo < 0 && numThree < 0) || (numOne > 0 && numTwo > 0 && numThree < 0) || (numOne < 0 && numTwo > 0 && numThree > 0) || (numOne > 0 && numTwo < 0 && numThree > 0);

    (negative) ? console.log('Negative') : console.log('Positive');

}

signCheck(-5, -12, 3);
