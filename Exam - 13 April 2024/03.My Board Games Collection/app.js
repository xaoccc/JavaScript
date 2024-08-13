function solve() {
    rootUrl = 'http://localhost:3030/jsonstore/games/';

    const container = document.querySelector('#games-list');
    let [name, type, players] = document.querySelectorAll('form input');
    const addBtn = document.querySelector('#add-game');
    const editBtn = document.querySelector('#edit-game');
    const loadBtn = document.querySelector('#load-games');


    function createChild(tag, parent, classes, text) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        return element;
    }

    function createEntry(obj) {
        const entryWrapper = document.createElement('div');
        entryWrapper.classList.add('board-game');
        // Create an id for the entry, so we can easily make PUT/PATCH requests later on
        entryWrapper.id = obj._id;
        const dataWrapper = createChild('div', entryWrapper, ['content']);
        createChild('p', dataWrapper, [], obj.name);
        createChild('p', dataWrapper, [], obj.players);
        createChild('p', dataWrapper, [], obj.type);
        const buttonsWrapper = createChild('div', entryWrapper, ['buttons-container']);
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
                type: type.value,
                players: players.value
            })
        })
        // Clear the input fields and reload the data 
        .then(() => {
            [name.value, type.value, players.value] = ['', '', ''];
            loadData();
        })
        .catch((error) => console.log(error));
    }

    loadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadData();
    })

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addEntry();
    })


    function deleteEntry(el) {
        el.remove();
        fetch(`${rootUrl}${el.id}`, { method: 'DELETE'});
    }

    function editEntry(el) {
        current = Array.from(el.children[0].children).map((el) => el.textContent);
        [name.value, players.value, type.value] = current;
        editBtn.disabled = false;
        addBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    // Unlike the POST request, here we also need to add the id in the body. Do not forget it!
                    _id: el.id,
                    name: name.value,
                    type: type.value,
                    players: players.value,
                })
            })
            .then(() => {
                editBtn.disabled = true;
                addBtn.disabled = false;
                // Clear the input fields and reload the data 
                [name.value, type.value, players.value] = ['', '', ''];
                loadData();             
            })
            .catch((error) => console.log(error));            
        })
    }

}

solve();
