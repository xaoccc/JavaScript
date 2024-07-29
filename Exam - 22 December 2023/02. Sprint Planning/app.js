window.addEventListener('load', solve);

function solve() {
    let inputs = Array.from(document.querySelectorAll('#label, #title, #description, #points, #assignee'));
    const createTaskBtn = document.querySelector('#create-task-btn');
    const deleteTaskBtn = document.querySelector('#delete-task-btn');
    const tasksSection = document.querySelector('#tasks-section');
    let articles = Array.from(tasksSection.querySelectorAll('article'));
    let totalPts = document.querySelector('#total-sprint-points');
    let points = Number(totalPts.textContent.match(/\d+(\.\d+)?/g));
    let tasksData = {};
    let taskId = document.querySelector('#task-id');
    inputs = [inputs[2], inputs[0], inputs[1], inputs[3], inputs[4]];

    function createNewTask() {
        let article = document.createElement('article');       
        points = Number(totalPts.textContent.match(/\d+(\.\d+)?/g));
        totalPts.textContent = `Total points ${points + Number(document.querySelector('#points').value)}pts` 
        articles = Array.from(tasksSection.querySelectorAll('article'));
        const articleChildren = [
            ['div', ['task-card-label', inputs[0].value.toLowerCase().split(' ').slice(0, 2).join('-')], '', ''], 
            ['h3', ['task-card-title'], '', ''], 
            ['p', ['task-card-description'], '', ''],                     
            ['div', ['task-card-points'], 'Estimated at ', ' pts'], 
            ['div', ['task-card-assignee'], 'Assigned to: ', '']
        ]
        article.id = `task-${articles.length + 1}`;
        article.className = 'task-card';
        tasksData[article.id] = [];
        tasksSection.appendChild(article);
        articleChildren.forEach((taskAttr, i) => {
            let childElement = document.createElement(taskAttr[0]);
            childElement.classList.add(...taskAttr[1]);
            childElement.textContent = articleChildren[i][2] + inputs[i].value + articleChildren[i][3];
            tasksSection.lastElementChild.appendChild(childElement);

            if (childElement.className === 'task-card-label feature') {
                childElement.innerHTML += ' &#8865';
            } else if (childElement.className === 'task-card-label low-priority') {
                childElement.innerHTML += ' &#9737';
            } else if (childElement.className === 'task-card-label high-priority') {
                childElement.innerHTML += ' &#9888';
            }
            tasksData[article.id].push(inputs[i].value);
            inputs[i].value = '';
        })
        const articleButtonContainer = document.createElement('div');
        articleButtonContainer.classList.add('task-card-actions');
        const articleButton = document.createElement('button');
        articleButton.textContent = 'Delete';
        article.appendChild(articleButtonContainer);
        articleButtonContainer.appendChild(articleButton);        
    }    

    createTaskBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (!inputs.some((input) => !input.value.trim())) {
            createNewTask();
        }   
    })

    tasksSection.addEventListener('click', function(e) {
        if (e.target.parentElement.className === 'task-card-actions') {
            deleteTaskBtn.disabled = false;
            createTaskBtn.disabled = true;
            taskId.value = e.target.parentElement.parentElement.id;
            inputs.forEach((field, index) => {
                field.value = tasksData[taskId.value][index];
                field.disabled = true;
            })   
        }
    })

    deleteTaskBtn.addEventListener('click', function(e) {

        articles = Array.from(tasksSection.querySelectorAll('article'));
        articles.forEach((article) => {
            if (article.id === taskId.value) {
                points = Number(totalPts.textContent.match(/\d+(\.\d+)?/g)) - Number(tasksData[article.id][3]);
                totalPts.textContent = `Total points ${points}pts` 
                inputs.forEach((field) => {
                    field.value = '';
                    field.disabled = false;
                })
                let taskToDelete = document.getElementById(taskId.value);
                if (taskToDelete) {
                    tasksSection.removeChild(taskToDelete);
                }
                delete tasksData[taskId.value];                
                taskId.value = '';
            }
        })

        articles = Array.from(tasksSection.querySelectorAll('article'));
        articles.forEach((article, index) => {
            article.id = `task-${index + 1}`;            
        })

        tasksData = Object.fromEntries(Object.entries(tasksData).map(([key, value], index) => [`task-${index + 1}`, value]));
        deleteTaskBtn.disabled = true;
        createTaskBtn.disabled = false;
    })
    
}