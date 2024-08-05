function attachEvents() {
    const rootUrl = 'http://localhost:3030/jsonstore/blog';
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const btnViewPost = document.getElementById('btnViewPost');
    const title = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');
    let posts = document.getElementById('posts');

    function createChild(tag, parent, classes, text, value, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (value) ? element.value = value : null;
        (id) ? element.id = id: null;
    }

    btnLoadPosts.addEventListener('click', (e) =>{
        fetch(`${rootUrl}/posts`)
        .then(res => res.json())
        .then(data => {
            for (row in data) {
                createChild('option', posts, [], data[row].title, row);
            }
            btnViewPost.addEventListener('click', (e) => {
                fetch(`${rootUrl}/comments`)
                .then(res => res.json())
                .then(newdata => {
                    let option = document.querySelector('select option:checked')
                    title.textContent = option.textContent;
                    postBody.textContent = data[option.value].body;
                    for (entry in newdata) {
                        if (newdata[entry].postId === option.value) {
                            createChild('li', postComments, [], newdata[entry].text, '', newdata[entry].id);
                        }
                    }                    
                })
                .catch(error => {
                    console.error('Error fetching comments:', error);
                });
            })
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
        
    })
}

attachEvents();