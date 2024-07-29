window.addEventListener("load", solve);

function solve() {
    const submitBtn = document.querySelector('#publish-btn');
    const tasksForReview = document.querySelector('#relatedPosts');

    function createChild(tag, text, parent, classes, id) {
        let el = document.createElement(tag);
        (text) ? el.textContent = text : null;
        (parent) ? parent.appendChild(el) : null;
        (classes && classes.length > 0) ? el.classList.add(...classes) : null;
        (id) ? el.id = id : null;
    }
    function addTask() {
        createChild('div', 'text', tasksForReview, ['class1', 'class2'], 'idnamepesho');
    }

    submitBtn.addEventListener('click', addTask);
  
}