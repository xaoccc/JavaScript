function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/tasks/';

    const container = document.querySelector('#list');
    let [food, time, calories] = document.querySelectorAll('form input');
    const addBtn = document.querySelector('#add-meal');
    const editBtn = document.querySelector('#edit-meal');
    const loadBtn = document.querySelector('#load-meals');


    function createChild(tag, parent, classes, text, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (id) ? element.id = id : null;
        return element;
    }

    function createEntry(obj) {
        const entryWrapper = document.createElement('div');
        entryWrapper.classList.add('meal');
        // Create an id for the entry, so we can easily make PUT/PATCH requests later on
        entryWrapper.id = obj._id;
        createChild('h2', entryWrapper, [], obj.food);
        createChild('h3', entryWrapper, [], obj.time);
        createChild('h3', entryWrapper, [], obj.calories);

        const buttonsWrapper = createChild('div', entryWrapper, ['buttons'], '', 'meal-buttons');
        const editEntryBtn = createChild('button', buttonsWrapper, ['change-meal'], 'Change');
        const deleteBtn = createChild('button', buttonsWrapper, ['delete-meal'], 'Delete');
    
        editEntryBtn.addEventListener('click', (e) => {          
            editEntry(e.target.parentElement);
        })
        deleteBtn.addEventListener('click', (e) => {
            deleteEntry(e.target.parentElement.parentElement);
        })
        container.appendChild(entryWrapper);
    }

    function loadData() {
        // Clear the container brefore populating!
        container.innerHTML = '';
        fetch(rootUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            for (obj of Object.values(data)) {
                createEntry(obj);
            }
        })
        .catch((error) => console.log(error));
    }

    function addEntry() {
        fetch(rootUrl, {
            method: 'POST',
            body: JSON.stringify({
                food: food.value,
                time: time.value,
                calories: calories.value,
            })
        })
        // Clear the input fields and reload the data 
        .then(() => {
            [food.value, time.value, calories.value] = ['', '', ''];
            loadData();
        })
        .catch((error) => console.log(error));
    }

    function deleteEntry(el) {
        el.remove();
        fetch(`${rootUrl}${el.id}`, { method: 'DELETE'});
    }

    loadBtn.addEventListener('click', loadData);
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addEntry();
    });

    function editEntry(el) {
        // Get the data from the entry and copy it to the input fields:


        current = Array.from(el.parentElement.children).slice(0, -1).map((el) => el.textContent);
        console.log(current);
        [food.value, time.value, calories.value] = current;

        editBtn.disabled = false;
        addBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.parentElement.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    _id: el.parentElement.id,
                    food: food.value,
                    time: time.value,
                    calories: calories.value,
                })
            })
            .then(() => {
                editBtn.disabled = true;
                addBtn.disabled = false;
                [food.value, time.value, calories.value] = ['', '', ''];
                loadData();             
            })
            .catch((error) => console.log(error));            
        })
    }

}

solve();