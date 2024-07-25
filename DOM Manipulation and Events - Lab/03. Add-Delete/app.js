function addItem() {
 
    const input = document.querySelector('#newItemText');
    const items = document.querySelector('#items');
    const [li, a] = ['li', 'a'].map(tag => document.createElement(tag));
    a.href = '#';
    li.textContent = input.value;
    a.textContent = '[Delete]';

    items.addEventListener('click', function (e) {
        e.target.parentNode.remove();
    });

    items.appendChild(li);
    li.appendChild(a);
}