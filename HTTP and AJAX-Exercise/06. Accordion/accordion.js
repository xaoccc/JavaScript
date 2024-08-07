function solution() {
    const container = document.querySelector('#main');
    const rootUrl = 'http://localhost:3030/jsonstore/advanced/articles/'

    function createChild(tag, parent, classes, text, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (id) ? element.id = id : null;
        return element;
    }

    function showData() {
        fetch(`${rootUrl}list`)
        .then(res => res.json())
        .then((data) => {

            for (entry in data) {
                createChild('div', container, ['accordion']);
                createChild('div', container.lastElementChild, ['head']);
                createChild('span', container.lastElementChild.lastElementChild, [], data[entry].title);
                const button = createChild('button', container.lastElementChild.lastElementChild, ['button'], 'More', data[entry]._id);
                let hidden = createChild('div', container.lastElementChild, ['extra']);
                const details = createChild('p', hidden);

                fetch(`${rootUrl}details/${data[entry]._id}`)
                .then(result => result.json())
                .then((itemData) => {
                    details.textContent = itemData.content;
                    button.addEventListener('click', (e) => {
                        if (hidden.style.display === 'none' || !hidden.style.display) {                            
                            hidden.style.display = 'block';                            
                            button.textContent = 'LESS';
                        } else {
                            hidden.style.display = 'none';
                            button.textContent = 'MORE';  
                        }
                    })
                })
                .catch((error) => console.log(error)); 
            } 
        })
        .catch((error) => console.log(error));
    }
    showData();   
}

window.addEventListener('load', (е) => {
    solution();
})