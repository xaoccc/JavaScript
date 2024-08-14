window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.querySelector('#adopt-btn');
  // inputs must be an array, so we can easily check if some of the fields are empty
  const [param1, param2, param3, ...paramN] = Array.from(document.querySelectorAll('#param1, #param2, #param3, ...#paramN'));
  const dataPool = document.querySelector('#ul1');
  const dbList = document.querySelector('#ul2');
 

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
    createChild('p', dataWrapper, [], `HelpText1:${param1.value}`);
    createChild('p', dataWrapper, [], `HelpText2:${param2.value}`);
    createChild('p', dataWrapper, [], `HelpText3:${param3.value}`);
    const buttonsWrapper = createChild('div', wrapper, ['buttons']);
    createChild('button', buttonsWrapper, ['edit-btn'], 'Edit');
    createChild('button', buttonsWrapper, ['done-btn'], 'Done');
    dataPool.appendChild(wrapper);
    // Clear input fields after creating an entry
    [param1.value, param2.value, param3.value, ...paramN.value] = ['', '', '', ''];
  }

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Check if there is an empty input field and if not, create new entry
    if (![param1, param2, param3, ...paramN].some((input) => !input.value.trim())) {
      createEntry();
    }
  })

  // Get the data from the saved entry and put into input fields
  function editEntry(data) {    
    textData = Array.from(data.children).map((entry) => entry.textContent.split(':')[1]);
    [param1.value, param2.value, param3.value, ...paramN.value] = textData;
    // Remove entry from data pool:
    data.parentElement.remove();
  }

  function saveEntry(entry) {
    const deleteBtn = createChild('button', entry, ['clear-btn'], 'Clear');    
    dbList.appendChild(entry);
    dbList.lastElementChild.querySelector('.buttons').remove();  
    
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