window.addEventListener("load", solve);

function solve() {
  const submitBtn = document.querySelector('<<single button selector>>');
  // inputs must be an array, so we can easily check if some of the fields are empty
  const inputs = Array.from(document.querySelectorAll('<<inputs selector>>'));
  const dataPool = document.querySelector('<<storage element selector, where the input data will go>>');
  const DOMhelper = [[tagName1, textBefore1, textAfter1], [tagName2, textBefore2, textAfter2], [tagName3, textBefore3, textAfter3], ...]


  function createChild(tag, parent, classes, text, id) {
    let el = document.createElement(tag);
    (text) ? el.textContent = text : null;
    (parent) ? parent.appendChild(el) : null;
    (classes && classes.length > 0) ? el.classList.add(...classes) : null;
    (id) ? el.id = id : null;
  }

  submitBtn.addEventListener('click', () => {
    if (!inputs.some((input) => !input.value.trim())) {
      // Move data from form to database/ul/table..., clear the input field and (optional) disable submit button
      // If the event target is a submit button or <a>, add this at the beginning of event listener: event.preventDefault();
      // Create the needed structure. Create elements from root to end elements.
      DOMhelper.forEach((element, index) => {
        createChild(
            element[0], 
            dataPool, 
            classes(optional) /* must be a list. If no classes needed provide an empty list */, 
            element[1] + inputs[index].value + element[2] (optional) /* If no text needed provide an empty string */, 
            id(opional)
        );
      })
    }
  })
  // Add more event listeners for Edit and Delete buttons...
  // Here is some example code for event delegation for two buttons:
  dataPool.addEventListener('click', function(e){
    if (e.target.className === 'edit-button') {
      // do something
    } else if (e.target.className === 'delete-button') {
      // do something else
    }
  })
  }