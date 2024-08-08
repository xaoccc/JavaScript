function attachEvents() {
  const rootUrl = 'http://localhost:3030/jsonstore/tasks/'
  const container = document.querySelector('#todo-list');
  const addButton = document.querySelector('#add-button');
  const loadButton = document.querySelector('#load-button');
  const title = document.querySelector('#title');

  function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    if (text) {
      child.textContent = text;
    }
    parent.appendChild(child);
    return child;
  }

  function createTaskEntry(task) {
    createChild('li', container);
    createChild('span', container.lastElementChild, task.name);
    const deleteButton = createChild('button', container.lastElementChild, 'Remove');
    const editButton = createChild('button', container.lastElementChild, 'Edit');
    deleteButton.addEventListener('click', () => {
      fetch(`${rootUrl}${task._id}`, { method: 'DELETE'})
      .then(res => res.json())
      .then(data => loadTasks())
      .catch(error => console.log(error));
    });

    editButton.addEventListener('click', () => {    
      
      if (editButton.textContent === 'Edit') {
        editButton.textContent = 'Submit';  
        editButton.parentElement.children[0].remove()
        const editInput = document.createElement('input');
        editButton.parentElement.insertBefore(editInput, editButton.parentElement.firstChild);      
        editInput.value = task.name;
      } else if (editButton.textContent === 'Submit') {
        editButton.textContent = 'Edit';
        
        const newValue = editButton.parentElement.children[0].value;

        fetch(`${rootUrl}${task._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            name: newValue,
            _id: task._id
          })
        })
        .then((res) => res.json())
        .then(task => {
          console.log(task);
          editButton.parentElement.children[0].remove()
          const span = document.createElement('span');
          span.textContent = newValue;
          editButton.parentElement.insertBefore(span, editButton.parentElement.firstChild); 
        })
        .catch(error => console.log(error));
      }

      })
  }

  function loadTasks() {
    fetch(rootUrl)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        container.innerHTML = '';
        Object.values(data).forEach(task => {
          createTaskEntry(task);          
        })        
      }).catch(error => console.log(error));
  }

  function addTask() {
      fetch(rootUrl, {
        method: 'POST',
        body: JSON.stringify({ 
          name: title.value 
        })
      })
      .then(res => res.json())
      .then(task => {
        loadTasks();
      })
      .catch(error => console.log(error));
      title.value = '';
    }   


  loadButton.addEventListener('click', (e) => {
    e.preventDefault();
    loadTasks();
  });

  addButton.addEventListener('click', (e) => {
    e.preventDefault();
    addTask();
    loadTasks();
  })

}

attachEvents();
