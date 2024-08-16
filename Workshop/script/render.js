let solutionsH2 = document.querySelector('#home ~ h2');
let noSolutionsH2 = document.querySelector('#no-solution');



export function renderHome() {
    solutionsH2.style.display = 'none';
    noSolutionsH2.style.display = 'none';
    return document.querySelector('#home');
}

export function renderSolutions() {
    let solutions = document.querySelector('#solutions');    
    let solutionsH2 = document.querySelector('#home ~ h2');
    let noSolutionsH2 = document.querySelector('#no-solution'); 
    
    console.log(solutionsH2);
    console.log(noSolutionsH2);    

    if (solutions.children.length === 0) {
        noSolutionsH2.style.display = 'block';
    } else {
        console.log(solutions.children.length > 0);
        solutionsH2.style.display = 'block';
    }

    console.log(solutionsH2);
    console.log(noSolutionsH2);

    return solutions;
}

export function renderRegister() {  
    return document.querySelector('#register')
}

export function renderLogin() {
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