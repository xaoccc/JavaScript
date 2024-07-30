window.addEventListener("load", solve);

function solve() {
    const submitBtn = document.querySelector('#publish-btn');
    const inputs = Array.from(document.querySelectorAll('form input[type=text], form textarea'));
    let reviewList = document.querySelector('#review-list');
    let publishedList = document.querySelector('#published-list');
    const article = [['h4', ''], ['p', 'Category: '], ['p', 'Content: ']]

    function createChild(tag, parent, classes, text, id) {
        let el = document.createElement(tag);
        (text) ? el.textContent = text : null;
        (parent) ? parent.appendChild(el) : null;
        (classes && classes.length > 0) ? el.classList.add(...classes) : null;
        (id) ? el.id = id : null;
    }
    function addTask() {
        createChild('li', reviewList, ['rpost']);
        createChild('article', reviewList.lastElementChild);
        createChild('button', reviewList.lastElementChild, ['action-btn', 'edit'], 'Edit');
        createChild('button', reviewList.lastElementChild, ['action-btn', 'post'], 'Post');
        article.forEach((element, i) => {
            createChild(element[0], reviewList.lastElementChild.querySelector('article'), [], element[1] + inputs[i].value);
            inputs[i].value = '';
        })        
    }

    submitBtn.addEventListener('click', () => {
        if (!inputs.some((input) => !input.value.trim())) {
            addTask();
        } 
    })

    reviewList.addEventListener('click', function(e) {
        if (e.target.className === 'action-btn edit') {
            const dataForEdit = e.target.previousElementSibling.children;
            inputs.forEach((field, index) => {
                (index !== 0) ? field.value = dataForEdit[index].textContent.split(': ')[1] : field.value = dataForEdit[index].textContent;                
            })
            e.target.parentElement.remove();
        } else if (e.target.className === 'action-btn post') {
            const dataForPost = e.target.parentElement;
            publishedList.appendChild(dataForPost.cloneNode(true));
            dataForPost.remove();
            publishedList.lastElementChild.querySelectorAll('button').forEach((button) => button.remove());
        }
    })
  
}