
function solve() {
    const numberInput = document.getElementById('input').textContent;
    const selectTo = document.getElementById('selectMenuTo');
    const binary = document.querySelector('#selectMenuTo option');
    const hexadecimal = document.createElement('option');
    const resultField = document.getElementById('result');
    const convertButton = document.querySelector('#container button');

    binary.id = 'binary';
    binary.value = 'binary';
    binary.textContent = 'Binary';
    
    hexadecimal.id = 'hexadecimal';
    selectTo.appendChild(hexadecimal);
    hexadecimal.value = 'hexadecimal';
    hexadecimal.textContent = 'Hexadecimal';

    convertButton.addEventListener('click', () => {
        resultField.textContent = 'test';
    } )
   


    function binaryConverter () {
        return;
    }

    function hexadecimalConverter () {
        return;
    }


}