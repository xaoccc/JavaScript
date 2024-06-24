function multiplicationTable() {
    let result = '<table border="1">\n';
    result += '<tr><th>x</th>';
    for (let i = 1; i <= 10; i++) {
        result += `<th>${i}</th>`;
    }
    result += '</tr>\n';
    for (let i = 1; i <= 10; i++) {
        result += `<tr><th>${i}</th>`;
        for (let j = 1; j <= 10; j++) {
            result += `<td>${i * j}</td>`;
        }
        result += '</tr>\n';
    }
    result += '</table>';
    document.getElementById('table-container').innerHTML = result;
}

multiplicationTable();