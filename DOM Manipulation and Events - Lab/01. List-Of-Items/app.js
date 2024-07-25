function addItem() {
    const input = document.querySelector('#newItemText');
    const items = document.querySelector('#items');
    const li = document.createElement('li');
    li.textContent = input.value;
    items.appendChild(li);
}