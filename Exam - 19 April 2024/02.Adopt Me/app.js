window.addEventListener("load", solve);

function solve() {
    const submitBtn = document.querySelector('#adopt-btn');
    // inputs must be an array, so we can easily check if some of the fields are empty
    const [type, age, gender] = Array.from(document.querySelectorAll('#type, #age, #gender'));
    const dataPool = document.querySelector('#adoption-info');
    const contactList = document.querySelector('#adopted-list');
   
  
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
      createChild('p', dataWrapper, [], `Pet:${type.value}`);
      createChild('p', dataWrapper, [], `Gender:${gender.value}`);
      createChild('p', dataWrapper, [], `Age:${age.value}`);
      const buttonsWrapper = createChild('div', wrapper, ['buttons']);
      createChild('button', buttonsWrapper, ['edit-btn'], 'Edit');
      createChild('button', buttonsWrapper, ['done-btn'], 'Done');
      dataPool.appendChild(wrapper);
      [type.value, gender.value, age.value] = ['', '', ''];
    }

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (![type, gender, age].some((input) => !input.value.trim())) {
        createEntry();
      }
    })


    function editEntry(data) {    
      textData = Array.from(data.children).map((entry) => entry.textContent.split(':')[1]);
      [type.value, gender.value, age.value] = textData;
      data.parentElement.remove();
    }
  
    function saveEntry(entry) {
      const deleteBtn = createChild('button', entry, ['clear-btn'], 'Clear');
      contactList.appendChild(entry);
      contactList.lastElementChild.querySelector('.buttons').remove();  
      
      deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
      })
    }
  
    dataPool.addEventListener('click', function(e){
      if (e.target.className === 'edit-btn') {
        editEntry(e.target.parentElement.previousElementSibling);
      } else if (e.target.className === 'done-btn') {
        saveEntry(e.target.parentElement.parentElement);
      }
    })


  }
  