window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.querySelector('#add-btn');
  // inputs must be an array, so we can easily check if some of the fields are empty
  const [name, phone, category] = Array.from(document.querySelectorAll('#name, #phone, #category'));
  const dataPool = document.querySelector('#check-list');
  const contactList = document.querySelector('#contact-list');



  function createChild(tag, parent, classes, text, id) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;
    return el;
  }

  function createEntry() {
    const wrapper = document.createElement('li');
    const dataWrapper = createChild('article', wrapper);
    createChild('p', dataWrapper, [], `name:${name.value}`);
    createChild('p', dataWrapper, [], `phone:${phone.value}`);
    createChild('p', dataWrapper, [], `category:${category.value}`);
    const buttonsWrapper = createChild('div', wrapper, ['buttons']);
    createChild('button', buttonsWrapper, ['edit-btn']);
    createChild('button', buttonsWrapper, ['save-btn']);
    dataPool.appendChild(wrapper);
    [name.value, phone.value, category.value] = ['', '', ''];
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (![name, phone, category].some((input) => !input.value.trim())) {
      createEntry();
    }
  })

  function editEntry(data) {    
    textData = Array.from(data.children).map((entry) => entry.textContent.split(':')[1]);
    [name.value, phone.value, category.value] = textData;
    data.parentElement.remove();
  }

  function saveEntry(entry) {
    const deleteBtn = createChild('button', entry, ['del-btn']);
    contactList.appendChild(entry);
    contactList.lastElementChild.querySelector('.buttons').remove();  
    
    deleteBtn.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    })
  }

  dataPool.addEventListener('click', function(e){
    if (e.target.className === 'edit-btn') {
      editEntry(e.target.parentElement.previousElementSibling);
    } else if (e.target.className === 'save-btn') {
      saveEntry(e.target.parentElement.parentElement);
    }
  })


}
  