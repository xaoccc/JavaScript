function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/tasks/';
    const container = document.querySelector('#list');
    const [name, days, date] = document.querySelectorAll('form input');
    const addVacationBtn = document.querySelector('#add-vacation');
    const editVacationBtn = document.querySelector('#edit-vacation');
    const loadVacationsBtn = document.querySelector('#load-vacations');

    function createChild(tag, parent, classes, text) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        return element;
    }

    function createEntry(obj) {
        const entryWrapper = document.createElement('div');
        entryWrapper.classList.add('container');
        entryWrapper.id = obj._id;
        createChild('h2', entryWrapper, [], obj.name);
        createChild('h3', entryWrapper, [], obj.date);
        createChild('h3', entryWrapper, [], obj.days);
        const changeBtn = createChild('button', entryWrapper, ['change-btn'], 'Change');
        const doneBtn = createChild('button', entryWrapper, ['done-btn'], 'Done');

        changeBtn.addEventListener('click', (e) => {          
            changeVacation(e.target.parentElement);
        })
        doneBtn.addEventListener('click', (e) => {
            deleteVacation(e.target.parentElement);
        })

        container.appendChild(entryWrapper);
    }



    function deleteVacation(el) {
        el.remove();
        fetch(`${rootUrl}${el.id}`, { method: 'DELETE'});
    }

    function loadVacations() {
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

    function addVacation() {
        fetch(rootUrl, {
            method: 'POST',
            body: JSON.stringify({
                name: name.value,
                date: date.value,
                days: days.value
            })
        })
        .then(() => {
            [name.value, date.value, days.value] = ['', '', ''];
            loadVacations();
        })
        .catch((error) => console.log(error));
    }

    function changeVacation(el) {
        current = Array.from(el.children).slice(0, -2).map((el) => el.textContent);
        [name.value, date.value, days.value] = current;
        editVacationBtn.disabled = false;
        // cannot put this event elsewhere, because we need the el.id for the PUT request
        editVacationBtn.addEventListener('click', (e) => {
            e.preventDefault();
            fetch(`${rootUrl}${el.id}`, { 
                method: 'PUT',
                body: JSON.stringify({
                    _id: el.id,
                    name: name.value,
                    date: date.value,
                    days: days.value
                })
            })
            .then(() => {
                editVacationBtn.disabled = false;
                [name.value, date.value, days.value] = ['', '', ''];
                loadVacations();                  
            })
            .catch((error) => console.log(error));            
        })
    }

    loadVacationsBtn.addEventListener('click', loadVacations);
    addVacationBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addVacation();
});
}

solve();