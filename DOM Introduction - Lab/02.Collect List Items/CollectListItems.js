function extractText() {
    let items = document.querySelectorAll('#items li');
    console.log(items);
    let textArea = document.querySelector('#result');
    for (let item of items) {
        textArea.value += `${item.textContent}\n`;
    }
}