function solve() {
    const rootUrl = 'http://localhost:3030/jsonstore/tasks/';
    const list = document.getElementById('list');
    const loadCourseBtn = document.getElementById('load-course');
    const addCourseBtn = document.getElementById('add-course');
    const editCourseBtn = document.getElementById('edit-course');
    const [title, type, description, teacher] = document.querySelectorAll('#form input, #form textarea')

    function createChild(tag, parent, classes, text, id) {
        let listItem = document.createElement(tag);
        parent.appendChild(listItem);
        (classes) ? listItem.classList.add(...classes) : null;
        (text) ? listItem.textContent = text : null;
        (id) ? listItem.id = id : null;
        return listItem;
    }

    function loadCourses() {
        list.innerHTML = '';
        fetch(rootUrl)
        .then((res) => res.json())
        .then((data) => {

            for (obj of Object.values(data)) {
                const container = document.createElement('div');
                container.classList.add('container');
                container.id = obj._id;
                createChild('h2', container, [], obj.title);
                createChild('h3', container, [], obj.teacher);
                createChild('h3', container, [], obj.type);
                createChild('h4', container, [], obj.description);
                const editCourseBtn = createChild('button', container, ['edit-btn'], 'Edit Course');
                const finishCourseBtn =createChild('button', container, ['finish-btn'], 'Finish Course');
                editCourseBtn.addEventListener('click', (e) => editCourse(e));
                finishCourseBtn.addEventListener('click', (e) => finishCourse(e));
                list.appendChild(container);
            }
        })
        .catch((error) => console.log(error));
    }

    function addCourse() {
        fetch(rootUrl, {
            method: 'POST',
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value
            })
        })
        .then(loadCourses)
        .catch((error) => console.log(error));
        [title, type, description, teacher].forEach((input) => input.value = '');
    }

    function finishCourse(e) {
        const id = e.target.parentElement.id;
        e.target.parentElement.remove();
        fetch(`${rootUrl}${id}`, {
            method: 'DELETE'
        })
        .catch((error) => console.log(error));
    }

    function editCourse(e) {
        const id = e.target.parentElement.id;
        const current = Array.from(e.target.parentElement.children).slice(0, -2);
        [title, teacher, type, description].forEach((input, i) => input.value = current[i].textContent);
        title.parentElement.id = id;
        addCourseBtn.disabled = true;
        editCourseBtn.disabled = false;       
    }

    loadCourseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loadCourses();        
    })

    addCourseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addCourse();
    })
    editCourseBtn.addEventListener('click', (e) => {
        e.preventDefault();
        id = e.target.parentElement.id

        function clear() {
            [title, type, description, teacher].forEach((input) => input.value = '');
            addCourseBtn.disabled = false;
            editCourseBtn.disabled = true;  
            e.target.parentElement.id = '';  
        }

        fetch(`${rootUrl}${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title.value,
                type: type.value,
                description: description.value,
                teacher: teacher.value,
                _id: id
            })
        })
        .then(() => {
            clear();
            loadCourses(); 
        })
        .catch((error) => console.log(error));
                
    }) 

}

solve();