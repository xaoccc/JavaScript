function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/tasks/';

    const container = document.querySelector('#list');
    let [location, temp, date] = document.querySelectorAll('form input');
    const addBtn = document.querySelector('#add-weather');
    const editBtn = document.querySelector('#edit-weather');
    const loadBtn = document.querySelector('#load-history');


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
        entryWrapper.classList.add('container');
        // Create an id for the entry, so we can easily make PUT/PATCH requests later on
        entryWrapper.id = obj._id;
        createChild('h2', entryWrapper, [], obj.location);
        createChild('h3', entryWrapper, [], obj.date);
        createChild('h3', entryWrapper, [], obj.temperature, 'celsius');

        const buttonsWrapper = createChild('div', entryWrapper, ['buttons']);
        const editEntryBtn = createChild('button', buttonsWrapper, ['change-btn'], 'Change');
        const deleteBtn = createChild('button', buttonsWrapper, ['delete-btn'], 'Delete');
    
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
                location: location.value,
                temperature: temp.value,
                date: date.value,
            })
        })
        // Clear the input fields and reload the data 
        .then(() => {
            [location.value, temp.value, date.value] = ['', '', ''];
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
        [location.value, date.value, temp.value] = current;

        editBtn.disabled = false;
        addBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.parentElement.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    _id: el.parentElement.id,
                    location: location.value,
                    temperature: temp.value,
                    date: date.value,
                })
            })
            .then(() => {
                editBtn.disabled = true;
                addBtn.disabled = false;
                [location.value, temp.value, date.value] = ['', '', ''];
                loadData();             
            })
            .catch((error) => console.log(error));            
        })
    }

}

solve();

