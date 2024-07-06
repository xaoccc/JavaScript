function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let searchPattern = document.querySelector('#searchField').value;
      let regex = new RegExp(searchPattern, 'i');
      let data = document.querySelectorAll('td');
      let rows = document.querySelectorAll('tr');

      for (let row of rows) {         
         row.className = '';         
      }

      for (let item of data) {
         if (regex.test(item.textContent)) {
            item.parentElement.className = 'select';
         } 
      }

   }
}