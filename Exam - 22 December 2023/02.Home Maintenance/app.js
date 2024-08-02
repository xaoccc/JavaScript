window.addEventListener("load", solve);

function solve() {
    const addBtn = document.querySelector('#add-btn');
    const inputs = Array.from(document.querySelectorAll('form input[type="text"]'));
    const [taskList, doneList] = document.querySelectorAll('#task-list, #done-list');
    const buttons = ['Edit', 'Done'];
    const helpText = ['Place: ', 'Action: ', 'Person: '];
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
            itemObj = [];
            let listItem = document.createElement('li');
            listItem.classList.add('clean-task');
            createChild('article', listItem);
            createChild('div', listItem, ['buttons']);
            inputs.forEach((input, i) => {
                createChild('p', listItem.children[0], [], helpText[i] + input.value);
                itemObj.push(input.value);
                input.value = '';
            });
            buttons.forEach((button) => createChild('button', listItem.children[1], [button.toLowerCase()], button));
            taskList.appendChild(listItem);
        }
    })

    taskList.addEventListener('click', (e) => {
        if (e.target.className === 'edit') {
            inputs.forEach((input, index) => {
                input.value = itemObj[index];
                e.target.parentElement.parentElement.remove();              
            })

        }  else if (e.target.className === 'done') {
            doneList.appendChild(taskList.lastElementChild);
            doneList.querySelector('.buttons').remove();
            createChild('button', doneList.lastElementChild, ['delete'], 'Delte');
        }
    })

    doneList.addEventListener('click', (e) => {
        if (e.target.className === 'delete') {
            e.target.parentElement.remove();
        }
    })

}