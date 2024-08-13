// Solution steps
// 1. Setup environment
// 1.1. npm install
// 1.2. npm start
// 1.3. node server.js

// 2. Solution
// 2.1. Remove item entry if in html file!
// 2.2. Create rootUrl:
const rootUrl = 'http://localhost:3030/jsonstore/...';

// 2.3. Create container, inputs and buttons variables:
const container = document.querySelector('#list');
const [input1, input2, input3, ...inputN] = document.querySelectorAll('form input');
const addBtn = document.querySelector('#add');
const editBtn = document.querySelector('#edit');
const loadBtn = document.querySelector('#load');

// 2.4. Add helper for creating child elements
function createChild(tag, parent, classes, text) {
    let element = document.createElement(tag);
    (parent) ? parent.appendChild(element) : null;
    (classes) ? element.classList.add(...classes) : null;
    (text) ? element.textContent = text : null;
    return element;
}
// 2.5. Helper for creating entry
function createEntry(obj) {
    const entryWrapper = document.createElement('div');
    entryWrapper.classList.add('container');
    // Create an id for the entry, so we can easily make PUT/PATCH requests later on
    entryWrapper.id = obj._id;
    createChild('h2', entryWrapper, [], obj.name);
    createChild('h3', entryWrapper, [], obj.date);
    createChild('h3', entryWrapper, [], obj.days);
    const editEntryBtn = createChild('button', entryWrapper, ['edit-btn'], 'Edit');
    const deleteBtn = createChild('button', entryWrapper, ['delete-btn'], 'Delete');

    editEntryBtn.addEventListener('click', (e) => {          
        editEntry(e.target.parentElement);
    })
    deleteBtn.addEventListener('click', (e) => {
        deleteEntry(e.target.parentElement);
    })
    container.appendChild(entryWrapper);
}

// 2.6. Load content

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
// 2.7. Add new entry:
function addEntry() {
    fetch(rootUrl, {
        method: 'POST',
        body: JSON.stringify({
            parameter1: input1.value,
            parameter2: input2.value,
            parameter3: input3.value,

            parameterN: inputN.value,
        })
    })
    // Clear the input fields and reload the data 
    .then(() => {
        [input1.value, input2.value, input3.value, ...inputN.value] = ['', '', '', ...''];
        loadData();
    })
    .catch((error) => console.log(error));
}
// 2.8. Add event listeners for buttons:
// Note that edit and delete buttons are not present. The logic for them is different! Chek if buttons are of type submit or in a form!
loadBtn.addEventListener('click', loadData);
addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addEntry();
});

// 2.9. Delete entry:
function deleteEntry(el) {
    // We first remove the element for better UX 
    el.remove();
    // And then we can do the DELETE request
    // If, during tests, the entry is not deleted from the db, we can make some modifications of this code (.then(do this).catch(error))
    fetch(`${rootUrl}${el.id}`, { method: 'DELETE'});
}
// 2.10 Edit Entry:
function editEntry(el) {
    // Get the data from the entry and copy it to the input fields:
    current = Array.from(el.children).slice(0, ...n).map((el) => el.textContent);
    [input1.value, input2.value, input3.value, ...inputN.value] = current;
    editBtn.disabled = false;
    addBtn.disabled = true;
    // We cannot put this eventListener elsewhere, 
    // - Because we need the el.id for the PUT/PATCH request
    // - Because it might the disabled and there is no use of eventListener for a disabled button
    editBtn.addEventListener('click', (e) => {
        e.preventDefault();
        fetch(`${rootUrl}${el.id}`, { 
            method: 'PUT',
            body: JSON.stringify({
                // Unlike the POST request, here we also need to add the id in the body. Do not forget it!
                _id: el.id,
                parameter1: input1.value,
                parameter2: input2.value,
                parameter3: input3.value,

                parameterN: inputN.value,
            })
        })
        .then(() => {
            editBtn.disabled = true;
            addBtn.disabled = false;
            // Clear the input fields and reload the data 
            [input1.value, input2.value, input3.value, ...inputN.value] = ['', '', '', ...''];
            loadData();             
        })
        .catch((error) => console.log(error));            
    })
}

// 3. npm test

// Notes:
// Do not include headers in requests
// Do not forget JSON.stringify() for POST, PUT and PATCH requests!
// For iterations inside fetch().then() always use (obj of Object.values(data)).
// If content is not reloading when loadContent() called, event.preventDefault() might be necessary at the beginning of eventListener