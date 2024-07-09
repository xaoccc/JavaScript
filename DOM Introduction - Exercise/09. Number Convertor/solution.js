
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
            resultField.value = numberInput.toString(16).toUpperCase();
        } else if (binary.selected)  {
            resultField.value = numberInput.toString(2);
        } 
    }) 
}

//     function binaryConverter(numberInput, result = '') {
//         while (numberInput > 0) {
//             (numberInput % 2 === 0) ? result = '0' + result : result = '1' + result;
//             numberInput = Math.floor(numberInput / 2); 
//         }

//         resultField.value = result;
//     }

//     function hexadecimalConverter(numberInput, result = '') {
//         const hexa = ['A', 'B', 'C', 'D', 'E', 'F'];
//         while (numberInput > 0) {
//             (numberInput % 16 < 10) ? result = String(numberInput % 16) + result : result = hexa[(numberInput % 16) - 10] + result;
//             numberInput = Math.floor(numberInput / 16);  
//         }    

//         resultField.value = result;
//     }
// 