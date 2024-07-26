function solve() {
  const generateButton = document.querySelector('button');
  const buyButon = document.querySelectorAll('button')[1];
  const tbody = document.querySelector('tbody');
  let resultField = document.querySelectorAll('textarea')[1];

  // Add an event listener to the first button and add the data to the table after it is clicked
  generateButton.addEventListener('click', function(e){
    const input = JSON.parse(document.querySelector('textarea').value);
    for (let inputEntry of input) {
      // Create an object for every input. This object will have the exact columns order as in the table: img, name, price, decFactor
      inputEntry = {img: inputEntry['img'], name: inputEntry['name'], price: inputEntry['price'], decFactor: inputEntry['decFactor']};
      tbody.appendChild(document.createElement('tr'));
      
      // Create five cells in each row for every input
      for (i=0; i<5; i++) {
        tbody.lastElementChild.appendChild(document.createElement('td'));
      }

      // The first cell is and image, next three are text and the last one is a checkbox:
      tbody.lastElementChild.querySelectorAll('td').forEach((cell, index) => {
        if (index === 0) {
          let img = cell.appendChild(document.createElement('img'));
          img.src = inputEntry['img']
        } else if (index < 4) {
          let p = cell.appendChild(document.createElement('p'));
          p.textContent = Object.values(inputEntry)[index];
        } else {
          let checkbox = cell.appendChild(document.createElement('input'));
          checkbox.type = 'checkbox';
        }
      });
    }  
  })

  // Add an event listener to the second button and add the data to the result textfield after it is clicked
  buyButon.addEventListener('click', function(e) {
    // Here we will store the data about bought furniture
    let furniture = {names: [], price: 0, decFactor: []}

      Array.from(tbody.children).forEach((row) => {
      let checkbox = row.querySelector('input[type="checkbox"]');
      let rowData = row.querySelectorAll('td p');

      // We have to check in each row if the checkbox is checked
      if (checkbox.checked) {
        rowData.forEach((row, index) => {
          switch (index) {
            case 0:
              furniture.names.push(row.textContent);
              break;
            case 1:
              furniture.price += Number(row.textContent);
              break;
            case 2:
              furniture.decFactor.push(Number(row.textContent));
              break;
          }
        })
      }
    })
    resultField.textContent = `Bought furniture: ${furniture.names.join(', ')}\nTotal price: ${furniture.price.toFixed(2)}\nAverage decoration factor: ${furniture.decFactor.reduce((a, b) => a + b) / furniture.decFactor.length}`;
  })  
}