// TODO
function attachEvents() {
  const rootUrl = 'http://localhost:3030/jsonstore/tasks/'
  const container = document.querySelector('#todo-list');
  const addButton = document.querySelector('#add-button');
  const loadButton = document.querySelector('#load-button');

  function createChild(tag, parent, classes, id, text) {
    const child = document.createElement(tag);
    if (classes) {
      child.classList.add(...classes);
    }
    if (id) {
      child.id = id;
    }
    if (text) {
      child.textContent = text;
    }
    parent.appendChild(child);
    return child;
  }

  function loadTasks() {
    fetch(rootUrl)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        container.innerHTML = '';

        Object.values(data).forEach(task => {
            console.log(task);
          createChild('li', container);
          createChild('span', container.lastElementChild, [], '', task.name);
          const deleteButton = createChild('button', container.lastElementChild, [], '', 'Remove');
          const editButton = createChild('button', container.lastElementChild, [], '', 'Edit');
        //   deleteButton.addEventListener('click', deleteTask);
        })
        
      }).catch(error => console.log(error));
  }

  loadButton.addEventListener('click', (e) => {
    e.preventDefault();
    loadTasks();
  });

}

attachEvents();
