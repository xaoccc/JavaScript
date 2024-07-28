window.addEventListener("load", solve);

function solve() {
  const button = document.querySelector('#form-btn');
  const inputs = Array.from(document.querySelectorAll('.inner-wrap input, select, textarea'));
  const previewContainer = document.querySelector('#preview-list');  
  const main = document.querySelector('#main');
  let inputStorage = [];

  function newChild(father, child) { return father.appendChild(document.createElement(child)) };

  function createStoryPreview() {
    const previewData = [['h4', `Name: ${inputs[0].value} `], ['p', 'Age: '], ['p', 'Title: '], ['p', 'Genre: '], ['p', '']];
    const buttons = [['save-btn', 'Save Story'], ['edit-btn', 'Edit Story'], ['delete-btn', 'Delete Story']];
    
    newChild(previewContainer, 'li').classList.add('story-info');
    article = newChild(previewContainer.lastChild,'article');
    inputStorage = [];
    inputStorage.push(inputs[0].value);
    inputs[0].value = '';
    inputs.slice(1).forEach((input, index) => {
      newChild(article, previewData[index][0]).textContent = previewData[index][1] + input.value; 
      inputStorage.push(input.value);
      input.value = '' ;   
    })
    buttons.forEach((button) => {
      const newBtn = newChild(previewContainer.lastChild,'button');
      newBtn.classList.add(button[0]);
      newBtn.textContent = button[1];
    })
    button.disabled = true;
  }

  button.addEventListener('click', function(e) {
    e.preventDefault();
    if (!inputs.some((input) => !input.value.trim())) {
      createStoryPreview();
    }
  })

  previewContainer.addEventListener('click', function(e) {
    switch (e.target.classList[0]) {
      case 'save-btn':
        main.removeChild(main.firstElementChild);
        main.removeChild(main.lastElementChild);
        let message = document.createElement('h1');
        message.textContent = 'Your scary story is saved!';
        main.appendChild(message);        
        break;
      case 'edit-btn':
        inputs.forEach((input, index) => {
          console.log(inputStorage);
          input.value = inputStorage[index];
        })
        previewContainer.removeChild(e.target.parentElement);
        button.disabled = false;
        break;
      case 'delete-btn':
        previewContainer.removeChild(e.target.parentElement);
        button.disabled = false;
        break;
 
    }

  })
}
