function attachEvents() {
    const rootUrl = 'http://localhost:3030/jsonstore/tasks/';
    const createTaskBtn = document.querySelector('#create-task-btn');
    const loadBoardBtn = document.querySelector('#load-board-btn');
    const [title, description] = document.querySelectorAll('#title, #description');
    const container = {
        'ToDo': [document.querySelector('#todo-section ul'), 'Move to In Progress'],
        'In Progress': [document.querySelector('#in-progress-section ul'), 'Move to Code Review'],
        'Code Review': [document.querySelector('#code-review-section ul'), 'Move to Done'],
        'Done': [document.querySelector('#done-section ul'), 'Close'],
    }
    const containers = Array.from(document.querySelectorAll('.task-list'));

    function createChild(tag, parent, text, classes) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (text) ? element.textContent = text : null;
        (classes) ? element.classList.add(...classes) : null;
        return element;
    }

    async function createTaskEntry(task, data) {
        const listItem = createChild('li', container[data[task].status][0], '', ['task']);
        createChild('h3', listItem, data[task].title);
        createChild('p', listItem, data[task].description);
        const moveButton = createChild('button', listItem, container[data[task].status][1]); 
        
        moveButton.addEventListener('click', async () => {
            if (moveButton.textContent === 'Close') {
                await deleteTaskHandler(task, moveButton);
                return;
            }
            await moveTaskHandler(task, data, moveButton);            
        });
    };

    async function loadTasks() {
        containers.forEach((container) => container.innerHTML = '');
        await fetch(rootUrl)
        .then((res) => res.json())
        .then((data) => {
            for (task in data) {
                createTaskEntry(task, data);
            } 
        })
        .catch((error) => console.log(error));
    }

    async function addTask() {
        await fetch(rootUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                description: description.value,
                status: 'ToDo'
            })
        })
        .catch((error) => console.log(error));        
        title.value = '';
        description.value = '';
        await loadTasks();
    }

    async function moveTaskHandler(task, data) {
        newStatus = container[data[task].status][1].split('Move to ')[1];
        await fetch(`${rootUrl}${task}`, {
            method: 'PATCH',
            body: JSON.stringify({
                status: newStatus,
            }),
            headers: {
                "Content-type": "application/json",
            }
        })
        .catch((error) => console.log(error));
        await loadTasks();
    }

    async function deleteTaskHandler(task) {
        await fetch(`${rootUrl}${task}`, {
            method: 'DELETE'
        })
        .catch((error) => console.log(error));
        await loadTasks();
    }

    loadBoardBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await loadTasks();
    })

    createTaskBtn.addEventListener('click', async (e) => {
        e.preventDefault();
        await addTask();
    })
}

attachEvents();