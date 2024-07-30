window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.getElementById('next-btn');
  const inputs = Array.from(document.querySelectorAll('.applyContent input'));
  const dataPool = document.getElementById('preview-list');
  const candidatesList = document.getElementById('candidates-list');
  const article = [['h4', ''], ['p', 'University: '], ['p', 'Score: ']];

  function createChild(tag, parent, classes, text, id) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes && classes.length > 0) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;
  }

  function addApplication() {
    const liRoot = document.createElement('li');
    liRoot.classList.add('application');
    createChild('article', liRoot);
    article.forEach((element, i) => {
      createChild(element[0], liRoot.querySelector('article'), [], element[1] + inputs[i].value);
      inputs[i].value = '';
    })   
    createChild('button', liRoot, ['action-btn', 'edit'], 'edit');
    createChild('button', liRoot, ['action-btn', 'apply'], 'apply');
    dataPool.appendChild(liRoot);     
  }

  function editApplication(e) {
    const dataForEdit = e.target.previousElementSibling.children;
    inputs.forEach((input, index) => {
      input.value = (index === 0) ? dataForEdit[index].textContent : dataForEdit[index].textContent.split(': ')[1];        
    })
    e.target.parentElement.remove();
    submitBtn.disabled = false;
  }

  function deleteApplication(e) {
    candidatesList.appendChild(e.target.parentElement);
    Array.from(candidatesList.lastElementChild.querySelectorAll('button')).forEach((element) => {
      element.remove();
    })
    submitBtn.disabled = false;    
  }

  submitBtn.addEventListener('click', () => {
    if (!inputs.some((input) => !input.value.trim())) {
      addApplication();
      submitBtn.disabled = true;
    }
  })

  dataPool.addEventListener('click', function(e) {
    if (e.target.className === 'action-btn edit') {
      editApplication(e);
    } else if (e.target.className === 'action-btn apply') {
      deleteApplication(e);
    }
  })  
}
  