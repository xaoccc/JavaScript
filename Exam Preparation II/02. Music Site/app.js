window.addEventListener('load', solve);

function solve() {
    const inputs = document.querySelectorAll('input');
    const addBtn = document.querySelector('#add-btn');
    const hitsContainer = document.querySelector('.all-hits-container');
    const savedSongsContainer = document.querySelector('.saved-container');

    function createCollectedSong(genre, name, author, date) {
        const img = document.createElement('img');
        img.src = './static/img/img.png';        
        const songContainer = document.createElement('div');
        songContainer.classList.add('hits-info');
        hitsContainer.appendChild(songContainer);
        const helpText = ['Genre: ', 'Name: ', 'Author: '];
        songContainer.appendChild(img);
        [genre, name, author].forEach((element, index) => {
            songContainer.appendChild(document.createElement('h2'));
            songContainer.lastElementChild.textContent = helpText[index] + element.value;
        })
        songContainer.appendChild(document.createElement('h3'));
        songContainer.lastElementChild.textContent = `Date: ${date.value}`;
        const buttons = [['save-btn', 'Save song'], ['like-btn', 'Like song'], ['delete-btn', 'Delete']];

        buttons.forEach((button) => {
            songContainer.appendChild(document.createElement('button'));
            songContainer.lastElementChild.classList.add(button[0]);
            songContainer.lastElementChild.textContent = button[1];
        })      

    }

    addBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if ( !Array.from(inputs).some((input) => !input.value)) {
            console.log('Do something!');
            let [genre, name, author, date] = Array.from(inputs);
            createCollectedSong(genre, name, author, date);
        }
    })

    hitsContainer.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const songContainer = e.target.parentElement;
            hitsContainer.removeChild(songContainer);
        } else if (e.target && e.target.classList.contains('like-btn')) {
            let likes = document.querySelector('.likes p').textContent;
            likes = likes.split(': ');
            likes[1] = String(Number(likes[1]) + 1);
            document.querySelector('.likes p').textContent = likes.join(': ');
            e.target.disabled = true;
        } else if (e.target && e.target.classList.contains('save-btn')) {
            const songContainer = e.target.parentElement;            
            hitsContainer.removeChild(songContainer);

            [songContainer.querySelector('.like-btn'), songContainer.querySelector('.save-btn')].forEach((button) => songContainer.removeChild(button));
            savedSongsContainer.appendChild(songContainer);
        }
        
    })

    savedSongsContainer.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('delete-btn')) {
            const songContainer = e.target.parentElement;
            savedSongsContainer.removeChild(songContainer);
        } 
        
    })
}