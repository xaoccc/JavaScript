window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.querySelector('#add-btn');
  const inputs = Array.from(document.querySelectorAll('.scoring-content input'));
  let sureList = document.querySelector('#sure-list');
  let scoreboardList = document.querySelector('#scoreboard-list');
  const scoreHelper = ['', 'Score: ', 'Round: '];


  function createChild(tag, parent, classes, text, id) {
      let el = document.createElement(tag);
      (text) ? el.textContent = text : null;
      (parent) ? parent.appendChild(el) : null;
      (classes && classes.length > 0) ? el.classList.add(...classes) : null;
      (id) ? el.id = id : null;
  }

  function addScore() {
    let listItem = document.createElement('li');
    listItem.classList.add('dart-item');
    createChild('article', listItem);
    scoreHelper.forEach((element, i) => {
      createChild('p', listItem.querySelector('article'), [], element + inputs[i].value);
      inputs[i].value = '';
    })  
    createChild('button', listItem, ['btn', 'edit'], 'edit');
    createChild('button', listItem, ['btn', 'ok'], 'ok');
    sureList.appendChild(listItem);
  }

  submitBtn.addEventListener('click', () => {
    if (!inputs.some((input) => !input.value.trim())) {
      addScore();
      submitBtn.disabled = true;
    }
  })

  sureList.addEventListener('click', (e) => {
    if (e.target.className === 'btn edit') {
      Array.from(e.target.previousElementSibling.children).forEach((element, index) => {
        inputs[index].value = element.textContent.split(': ')[(index === 0) ? 0 : 1];
      })
      e.target.parentElement.remove();
      submitBtn.disabled = false;
    } else if (e.target.className === 'btn ok'){      
      scoreboardList.appendChild(e.target.parentElement);
      Array.from(e.target.parentElement.querySelectorAll('button')).forEach((button) => button.remove());
      submitBtn.disabled = false;
    }
  })
}
  