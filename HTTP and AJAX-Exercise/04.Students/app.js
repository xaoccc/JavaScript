function attachEvents() {
  const rootUrl = 'http://localhost:3030/jsonstore/collections/students';
  const table = document.querySelector('tbody');
  const inputs = Array.from(document.querySelectorAll('input'));
  const submitBtn = document.querySelector('#submit');

  function showStudents() {
    table.innerHTML = '';
    fetch(rootUrl)
    .then((res) => res.json())
    .then((data) => {
      for (key in data) {
        console.log(data[key]);
        const tableRow = document.createElement('tr');
        for (studentDataKey in data[key]) {
          const cell = document.createElement('td');
          cell.textContent = data[key][studentDataKey];
          tableRow.appendChild(cell);
        }
        tableRow.lastElementChild.remove();
        table.appendChild(tableRow);
      }
      
    })
    .catch((error) => console.log(error));
  }

  function addStudent() {
    if (!inputs.some((input) => !input.value.trim())) {
      fetch(rootUrl, {
        method: 'POST',
        header: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify({
          firstName: inputs[0].value, 
          lastName: inputs[1].value, 
          facultyNumber: inputs[2].value, 
          grade: inputs[3].value
        })
      })
      inputs.forEach((input) => input.value = '');
      showStudents();      
    }
  }

  showStudents();
  submitBtn.addEventListener('click', () => {
    addStudent();
  })
}

attachEvents();