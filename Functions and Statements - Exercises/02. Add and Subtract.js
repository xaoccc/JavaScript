function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
    function sum(a, b) {
        return a + b
    }
    function subtract(a, b) {
        return a - b
    }
    return subtract(sum(firstNumber, secondNumber), thirdNumber);
}