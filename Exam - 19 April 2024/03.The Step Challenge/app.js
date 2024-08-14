function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/records/';

    // 2.3. Create container, inputs and buttons variables:
    const container = document.querySelector('#list');
    const [name, steps, calories] = document.querySelectorAll('form input');
    const addBtn = document.querySelector('#add-record');
    const editBtn = document.querySelector('#edit-record');
    const loadBtn = document.querySelector('#load-records');

    function createChild(tag, parent, classes, text) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        return element;
    }

    function createEntry(obj) {
        const entryWrapper = document.createElement('li');
        entryWrapper.classList.add('record');
        // Create an id for the entry, so we can easily make PUT/PATCH requests later on
        entryWrapper.id = obj._id;
        const dataWrapper = createChild('div', entryWrapper, ['info']);
        createChild('p', dataWrapper, [], obj.name);
        createChild('p', dataWrapper, [], obj.steps);
        createChild('p', dataWrapper, [], obj.calories);

        const buttonsWrapper = createChild('div', entryWrapper, ['btn-wrapper']);
        const editEntryBtn = createChild('button', buttonsWrapper, ['change-btn'], 'Change');
        const deleteBtn = createChild('button', buttonsWrapper, ['delete-btn'], 'Delete');
    
        editEntryBtn.addEventListener('click', (e) => {          
            editEntry(e.target.parentElement.parentElement);
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
                name: name.value,
                steps: steps.value,
                calories: calories.value
            })
        })
        // Clear the input fields and reload the data 
        .then(() => {
            [name.value, steps.value, calories.value] = ['', '', ''];
            loadData();
        })
        .catch((error) => console.log(error));
    }

    loadBtn.addEventListener('click', loadData);
    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addEntry();
    });

    function deleteEntry(el) {
        el.remove();
        fetch(`${rootUrl}${el.id}`, { method: 'DELETE'});
    }

    function editEntry(el) {
        current = Array.from(el.children[0].children).map((el) => el.textContent);
        [name.value, steps.value, calories.value] = current;
        editBtn.disabled = false;
        addBtn.disabled = true;
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    _id: el.id,
                    name: name.value,
                    steps: steps.value,
                    calories: calories.value
                })
            })
            .then(() => {
                editBtn.disabled = true;
                addBtn.disabled = false;
                // Clear the input fields and reload the data 
                [name.value, steps.value, calories.value] = ['', '', ''];
                loadData();             
            })
            .catch((error) => console.log(error));            
        })
    }

}

solve();