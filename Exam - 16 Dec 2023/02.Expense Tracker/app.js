window.addEventListener("load", solve);

function solve() {
    const [addBtn, preview, previweList, expensesList]  = document.querySelectorAll('#add-btn, #preview-list, #preview, #expenses-list');
    const inputs = Array.from(document.querySelectorAll('#form-container input'));
    const buttons = [['btn', 'edit'], ['btn', 'ok']];
    const helpText = [['Type: ', ''], ['Amount: ', '$'], ['Date: ', '']];
    let itemObj = [];

    function createChild(tag, parent, classes, text, id) {
        let element = document.createElement(tag);
        parent.appendChild(element);
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (id) ? element.id = id : null;
    }

    addBtn.addEventListener('click', (e) => {
        if (!inputs.some((input) => !input.value.trim())) {
            let listItem = document.createElement('div');
            listItem.classList.add('expense-item');
            createChild('article', listItem);
            createChild('div', listItem, ['buttons']);
            inputs.forEach((input, i) => {
                createChild('p', listItem.children[0], [], helpText[i][0] + input.value + helpText[i][1]);
                itemObj.push(input.value);
                input.value = '';
            });
            buttons.forEach((button) => createChild('button', listItem.children[1], button, button[1]));
            listItem.querySelector('.ok').type = 'submit';
            previweList.appendChild(listItem);
            addBtn.disabled = true;
        }
    })

    preview.addEventListener('click', (e) => {
        if (e.target.className === 'btn edit') {
            inputs.forEach((input, i) => input.value = itemObj[i]);
            preview.querySelector('.expense-item').remove();
            addBtn.disabled = false;
            itemObj = [];
        } else if (e.target.className === 'btn ok') {
            preview.querySelector('.expense-item').remove();
            expensesList.appendChild(e.target.parentElement.parentElement);
            expensesList.querySelector('.buttons').remove();
            addBtn.disabled = false;           

            let [type, amount, date] = itemObj

            fetch('http://localhost:5000/add_data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': true
                },
                body: JSON.stringify({type: type, amount: amount, date: date})
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
            itemObj = [];

        }
    })

    document.querySelector('.delete').addEventListener('click', (e) => {
        location.reload();
    })
}