let solutions = document.querySelector('#solutions'); 
let solutionsH2 = document.querySelector('#home ~ h2');
let noSolutionsH2 = document.querySelector('#no-solution');

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
    return solutions;
}

export function renderRegister() {  
    // e.preventDefault();
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
                console.log(data);
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
            console.log(data);
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
    return document.querySelector('#create');
}

export function renderEdit() {
    return document.querySelector('#edit');
}

export function renderDetails() {
    return document.querySelector('#details');
}