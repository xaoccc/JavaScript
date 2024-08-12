function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/gifts/';

    const container = document.querySelector('#gift-list');
    let [gift, name, price] = document.querySelectorAll('form input');
    const addBtn = document.querySelector('#add-present');
    const editBtn = document.querySelector('#edit-present');
    const loadBtn = document.querySelector('#load-presents');


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
        entryWrapper.classList.add('gift-sock');
        // Create an id for the entry, so we can easily make PUT/PATCH requests later on
        entryWrapper.id = obj._id;
        const dataWrapper = createChild('div', entryWrapper, ['content']);
        createChild('p', dataWrapper, [], obj.gift);
        createChild('p', dataWrapper, [], obj.for);
        createChild('p', dataWrapper, [], obj.price);
        const buttonsWrapper = createChild('div', entryWrapper, ['buttons-container']);
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
                gift: gift.value,
                for: name.value,
                price: price.value,
            })
        })
        // Clear the input fields and reload the data 
        .then(() => {
            [gift.value, name.value, price.value] = ['', '', ''];
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


        current = Array.from(el.parentElement.children[0].children).map((el) => el.textContent);
        console.log(current);
        [gift.value, name.value, price.value] = current;

        editBtn.disabled = false;
        addBtn.disabled = true;

        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.parentElement.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    _id: el.parentElement.id,
                    gift: gift.value,
                    for: name.value,
                    price: price.value,
                })
            })
            .then(() => {
                editBtn.disabled = true;
                addBtn.disabled = false;
                [[gift.value, name.value, price.value]] = ['', '', ''];
                loadData();             
            })
            .catch((error) => console.log(error));            
        })
    }

}

solve();