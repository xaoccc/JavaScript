function subtract() {
    let result = Number(document.querySelector('#firstNumber').value) - Number(document.querySelector('#secondNumber').value);
    document.getElementById('result').textContent = result;
}