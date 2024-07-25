function deleteByEmail() {
    let table = document.querySelectorAll('#customers tbody tr');
    let input = document.querySelector('input[type="text"]').value;
    let result = document.querySelector('#result');

    table.forEach((row) => Array.from(row.children).forEach((tableCell) => {
        if (tableCell.textContent === input) {            
            row.remove();
            result.textContent = 'Deleted.';
        }     
    if (result.textContent !== 'Deleted.') {
        result.textContent = 'Not found.'
    }        
    }));
}