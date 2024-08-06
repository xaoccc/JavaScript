function attachEvents() {
    const rootUrl = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const phonebook = document.querySelector('#phonebook');

    function createChild(tag, parent, text) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (text) ? element.textContent = text : null;
        return element;
    }

    function deleteContact(key, button, listItem) {
        button.addEventListener('click', () => {
            fetch(`${rootUrl}/${key}`, {
                method: 'DELETE'
            })
            .then(() => listItem.remove())
        })
    }

    function loadContacts() {
        phonebook.innerHTML = '';
        fetch(rootUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            Object.keys(data).forEach((key) => {
                const listItem = createChild('li', phonebook, `${data[key].person}: ${data[key].phone}`);
                const button = createChild('button', phonebook.lastElementChild, 'Delete');
                deleteContact(data[key]._id, button, listItem)                
            })
        })
        .catch((error) => {throw new Error(`Contacts could not be loaded because of ${error}`)});
    }

    function addContact() {
        let [person, phone] = document.querySelectorAll('input[type="text"]');

        if (person.value.trim() !== '' && phone.value.trim() !== '') {    
            fetch(rootUrl, {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    person: person.value,
                    phone: phone.value
                })
            })
            .then((res) => res.json())
            .then((entry) => {
                const listItem = createChild('li', phonebook, `${person.value}: ${phone.value}`, '');
                const button = createChild('button', phonebook.lastElementChild, 'Delete');
                person.value = '';
                phone.value = '';
                deleteContact(entry._id, button, listItem) 
            })
            .catch(error => console.log(error)) 
        }  
    }
    btnLoad.addEventListener('click', loadContacts);
    btnCreate.addEventListener('click', addContact);
}

attachEvents();