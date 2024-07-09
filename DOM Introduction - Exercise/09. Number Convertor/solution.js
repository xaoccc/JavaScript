
function solve() {
    
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
        const numberInput = Number(document.getElementById('input').value);
        if (hexadecimal.selected) {
            hexadecimalConverter(numberInput);
        } else if (binary.selected)  {
            binaryConverter(numberInput);
        } 
    } ) 


    function binaryConverter(numberInput) {
        return;
    }

    function hexadecimalConverter(numberInput) {
        const hexa = ['A', 'B', 'C', 'D', 'E', 'F'];
        let result = '';

        while (numberInput > 0) {
            (numberInput % 16 < 10) ? result = String(numberInput % 16) + result : result = hexa[(numberInput % 16) - 10] + result;
            numberInput = Math.floor(numberInput / 16);  
        }    

        resultField.value = result;
    }




}