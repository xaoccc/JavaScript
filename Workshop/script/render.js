const solutions = document.querySelector('#solutions'); 
const detailsWrapper = document.querySelector('#details-wrapper');
let solutionsH2 = document.querySelector('#home ~ h2');
let noSolutionsH2 = document.querySelector('#no-solution');
const guestNav = document.querySelector('.guest');
const userNav = document.querySelector('.user');


function createChild(tag, parent, classes, text, id) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes && classes.length > 0) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;    
    return el;
}

function createSolution(dataEntry) {    
    let div = document.createElement('div');
    div.classList.add('solution');
    div.id = dataEntry._id;
    let img = createChild('img', div, []);
    img.src = dataEntry.imageUrl;
    let solutionInfo = createChild('div', div, ['solution-info']);
    createChild('h3', solutionInfo, ['type'], dataEntry.type);
    createChild('p', solutionInfo, ['description'], dataEntry.description);
    let a = createChild('a', solutionInfo, ['details-btn'], 'Learn More');
    a.href = '/solution/details';
    a.addEventListener('click', function(e) {
        e.preventDefault();
        fetch(`http://localhost:3030/data/solutions/${dataEntry._id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            createReadMore(data);
        });
    });
    solutions.appendChild(div);
}

function editSolution() {
    console.log('Editing Solution!')
}

function deleteSolution() {
    console.log('Deleting Solution!')
}

function createReadMore(dataEntry) {
    detailsWrapper.innerHTML = '';
    let img = createChild('img', detailsWrapper, [], '', 'details-img');
    img.src = dataEntry.imageUrl;
    let wrapper = document.createElement('div');
    (!dataEntry.likes) ? dataEntry.likes = [] : null;

    createChild('p', wrapper, [], dataEntry.type, 'details-type');
    let infoWrapper = createChild('div', wrapper, [], '', 'info-wrapper');
    let detailDescription = createChild('div', infoWrapper, [], '', 'details-description');
    createChild('p', detailDescription, [], dataEntry.description, 'description');
    createChild('p', detailDescription, [], dataEntry.learnMore, 'more-info');
    let likeH3 = createChild('h3', wrapper, [], 'Like Solution:');
    
    createChild('span', likeH3, [], dataEntry.likes.length, 'like');
    let actionBtns = createChild('div', wrapper, [], '', 'action-buttons');

    if (dataEntry._id === dataEntry._ownerId) {
        let editBtn = createChild('a', actionBtns, [], 'Edit', 'edit-btn');
        editBtn.href = '/solution/edit';
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            editSolution();
        })
        let deleteBtn = createChild('a', actionBtns, [], 'Delete', 'delete-btn');
        deleteBtn.href = '/solution/delete';
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deleteSolution();
        })
    }

    let likeBtn = createChild('a', actionBtns, [], 'Like', 'like-btn');
    likeBtn.addEventListener('click', function() {
        if (!dataEntry.likes) {
            dataEntry.likes = [dataEntry._id];        
        } else if (!dataEntry.likes.includes(dataEntry._id)) {
            dataEntry.likes.push(dataEntry._id);
        }
    });
    likeBtn.href = '/solution/details';

    detailsWrapper.appendChild(wrapper);   

}

export function showNav() {
    console.log(localStorage.auth);
    if (localStorage.auth) {
        guestNav.style.display = 'none'
        userNav.style.display = 'block'
    } else {
        guestNav.style.display = 'block'
        userNav.style.display = 'none'
    }
}

export function renderHome() {
    solutionsH2.style.display = 'none';
    noSolutionsH2.style.display = 'none';
    return document.querySelector('#home');
}

export function renderSolutions() {
    solutionsH2.style.display = 'block';
    if (solutions.children.length === 0) {
        noSolutionsH2.style.display = 'block';
    } 
    solutions.innerHTML = '';

    fetch('http://localhost:3030/data/solutions')
    .then(res => res.json())
    .then(data => {
        data.forEach((dataEntry) => {
            createSolution(dataEntry);
        });
    });

    return solutions;
}

export function renderRegister() {  
    const [email, passwordOne, passwordTwo] = document.querySelectorAll('.register-form input');
    const submitBtn = document.querySelector('.register-form button');
    if (passwordOne.value && email.value && passwordOne.value === passwordTwo.value) {
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            fetch('http://localhost:3030/users/register', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email.value,
                    password: passwordOne.value,
                })
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('auth', JSON.stringify(data));
                window.dispatchEvent(new CustomEvent('popstate', {detail: '/'}));
            });
        });
        
    }
    return document.querySelector('#register')
}

export function renderLogin() {
    const loginForm = document.querySelector('.login-form');

    function loginUser(email, password) {
        fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Invalid email or password');
            }
            return res.json();
        })
        .then(data => {
            localStorage.setItem('auth', JSON.stringify(data));
            window.dispatchEvent(new CustomEvent('popstate', {detail: '/'}));
        })
        .catch(err => {
            console.log(err.message)});
        
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let formData = new FormData(loginForm);
        let email = formData.get('email');
        let password = formData.get('password');
        loginUser(email, password);
    });

    return document.querySelector('#login');
}

export function renderCreate() {
    const createSolutionForm = document.querySelector('.create-form')
    createSolutionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(createSolutionForm);

        const type = formData.get('type');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const learnMore = formData.get('more-info');

        fetch('http://localhost:3030/data/solutions', {
            method: 'post',
            body: JSON.stringify({
                type,
                imageUrl,
                description,
                learnMore,
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': JSON.parse(localStorage.auth).accessToken
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data._id);
        })
        .catch((error) => console.log(error));
    })

    return document.querySelector('#create');
}

export function renderEdit() {
    return document.querySelector('#edit');
}

export function renderDetails() {
    
    return document.querySelector('#details');
}