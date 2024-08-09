// window.addEventListener('load', attachEvents);

function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/tasks/';
    
    const loadBoardBtn = document.getElementById('load-board-btn');
    const createTaskBtn = document.getElementById('create-task-btn');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');

    const sections = {
        'ToDo': document.querySelector('#todo-section ul'),
        'In Progress': document.querySelector('#in-progress-section ul'),
        'Code Review': document.querySelector('#code-review-section ul'),
        'Done': document.querySelector('#done-section ul'),
    };

    loadBoardBtn.addEventListener('click', loadTasks);
    createTaskBtn.addEventListener('click', createTask);

    async function loadTasks() {
        clearSections();

        try {
            const response = await fetch(baseUrl);
            const tasks = await response.json();

            Object.values(tasks).forEach(task => {
                const liElement = createTaskElement(task);
                sections[task.status].appendChild(liElement);
            });
        } catch (error) {
            console.error('Failed to load tasks:', error);
        }
    }

    async function createTask() {
        const title = titleInput.value;
        const description = descriptionInput.value;

        if (title === '' || description === '') {
            return alert('Title and description are required!');
        }

        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({title, description, status: 'ToDo'})
            });

            if (!response.ok) {
                throw new Error('Failed to create task');
            }

            titleInput.value = '';
            descriptionInput.value = '';
            await loadTasks();

        } catch (error) {
            console.error('Failed to create task:', error);
        }
    }

    async function updateTaskStatus(taskId, newStatus) {
        try {
            const response = await fetch(`${baseUrl}${taskId}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({status: newStatus})
            });

            if (!response.ok) {
                throw new Error('Failed to update task status');
            }

            await loadTasks();

        } catch (error) {
            console.error('Failed to update task status:', error);
        }
    }

    async function deleteTask(taskId) {
        try {
            const response = await fetch(`${baseUrl}${taskId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete task');
            }

            await loadTasks();

        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    }

    function createTaskElement(task) {
        const liElement = document.createElement('li');
        liElement.className = 'task';

        const h3Element = document.createElement('h3');
        h3Element.textContent = task.title;

        const pElement = document.createElement('p');
        pElement.textContent = task.description;

        const buttonElement = document.createElement('button');

        if (task.status === 'ToDo') {
            buttonElement.textContent = 'Move to In Progress';
            buttonElement.addEventListener('click', () => updateTaskStatus(task._id, 'In Progress'));
        } else if (task.status === 'In Progress') {
            buttonElement.textContent = 'Move to Code Review';
            buttonElement.addEventListener('click', () => updateTaskStatus(task._id, 'Code Review'));
        } else if (task.status === 'Code Review') {
            buttonElement.textContent = 'Move to Done';
            buttonElement.addEventListener('click', () => updateTaskStatus(task._id, 'Done'));
        } else if (task.status === 'Done') {
            buttonElement.textContent = 'Close';
            buttonElement.addEventListener('click', () => deleteTask(task._id));
        }

        liElement.appendChild(h3Element);
        liElement.appendChild(pElement);
        liElement.appendChild(buttonElement);

        return liElement;
    }

    function clearSections() {
        Object.values(sections).forEach(section => section.innerHTML = '');
    }
}

attachEvents();