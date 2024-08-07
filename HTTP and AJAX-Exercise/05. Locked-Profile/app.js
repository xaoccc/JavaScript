function lockedProfile() {
    const rootUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const container = document.querySelector('main');
    

    function createChild(tag, parent, classes, text, id) {
        let element = document.createElement(tag);
        (parent) ? parent.appendChild(element) : null;
        (classes) ? element.classList.add(...classes) : null;
        (text) ? element.textContent = text : null;
        (id) ? element.id = id: null;
        return element
    }

    function showAllProfiles() {
        fetch(rootUrl)
        .then(res => res.json())
        .then((data) => {
            i = 1;
            for (userData in data) {
                if (i > 1) {
                    createChild('div', container, ['profile'], '', data[userData]._id);
                    let profilePic = createChild('img', container.lastElementChild, ['userIcon']);
                    profilePic.src = './iconProfile2.png';
                    createChild('label', container.lastElementChild, [], 'Lock');
                    let lockInput = createChild('input', container.lastElementChild);
                    lockInput.name = `User${i}Locked`;
                    lockInput.value = 'lock';
                    lockInput.type = 'radio';
                    lockInput.checked = 'true';
                    createChild('label', container.lastElementChild, [], 'Unlock');
                    let unlockInput = createChild('input', container.lastElementChild);
                    unlockInput.name = `User${i}Locked`;
                    unlockInput.value = 'unlock';
                    unlockInput.type = 'radio';
                    createChild('br', container.lastElementChild);
                    createChild('hr', container.lastElementChild);

                    createChild('label', container.lastElementChild, [], 'Username');
                    let usernameInput = createChild('input', container.lastElementChild);
                    usernameInput.name = `user${i}Username`;
                    usernameInput.value = data[userData].username;
                    usernameInput.disabled = 'true';
                    usernameInput.readOnly = 'true';

                    createChild('div', container.lastElementChild, ['user1Username', 'hiddenInfo'], '', `user${i}HiddenFields`);
                    createChild('hr', container.lastElementChild.lastElementChild);
                    createChild('label', container.lastElementChild.lastElementChild, [], 'Email:');
                    let emailInput = createChild('input', container.lastElementChild.lastElementChild);
                    emailInput.value = data[userData].email;
                    emailInput.type = 'email';
                    emailInput.name = `user${i}Email`;
                    emailInput.disabled = 'true';
                    emailInput.readOnly = 'true';
                    createChild('label', container.lastElementChild.lastElementChild, [], 'Age:');
                    let ageInput = createChild('input', container.lastElementChild.lastElementChild);
                    ageInput.value = data[userData].age;
                    ageInput.name = `user${i}Age`;
                    ageInput.type = 'text';
                    ageInput.disabled = 'true';
                    ageInput.readOnly = 'true';

                } else {
                    let [username, email, age] = container.querySelectorAll('input[type=text], input[type=email]');
                    [username.value, email.value, age.value] = [data[userData].username, data[userData].email, data[userData].age];  
                    container.querySelector('.user1Username').classList.add('hiddenInfo');                
                } 
                
                const button = (i>1) ? createChild('button', container.lastElementChild, [], 'Show more') : container.querySelector('.profile button');

                i += 1;
                button.addEventListener('click', (e) => {

                    let userData = Array.from(e.target.previousElementSibling.children).slice(1)
                    let radioInputLocked = e.target.parentElement.querySelectorAll('input[type=radio]')[0]

                    if (!radioInputLocked.checked && e.target.textContent !== 'Hide it') {
                        userData.forEach((element) => element.style.display = 'block');
                        e.target.textContent = 'Hide it'
                    } else if (!radioInputLocked.checked && e.target.textContent === 'Hide it') {
                        userData.forEach((element) => element.style.display = 'none');
                        e.target.textContent = 'Show more'
                    }                    
                })
            }
        })
    }
    showAllProfiles();
}