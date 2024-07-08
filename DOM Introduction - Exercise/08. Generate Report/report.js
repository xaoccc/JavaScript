function generateReport() {
    let checked = document.querySelectorAll('th input');
    let tbody = document.querySelectorAll('tbody');
    let checkedHeadersIndexes = {};
    let result = []

    for (c of checked) {
        if (c.checked) {

            checkedHeadersIndexes[Array.from(c.parentNode.parentNode.children).indexOf(c.parentNode)] = c.parentNode.textContent.toLowerCase().trim();
        };
    }
    console.log(checkedHeadersIndexes);
    for (row of tbody) {
        for (col of Array.from(row.children)){
            let rowData = {}
            for (data of col.children) {
                if (Object.keys(checkedHeadersIndexes).includes(String(Array.from(col.children).indexOf(data)))) {
                    rowData[checkedHeadersIndexes[Array.from(col.children).indexOf(data)]] = data.textContent;
                }

            }
            result.push(rowData);
        }
            
    }

    document.getElementById('output').textContent = JSON.stringify(result);
}