function sumTable() {
    let rowsData = document.querySelectorAll('td');
    let sum = 0;
    let result = document.querySelector('#sum');
    for (i=1; i<rowsData.length - 2; i+=2) {
        sum += Number(rowsData[i].textContent);
    }
    result.textContent = sum;
}