function search() {
   let towns = document.querySelectorAll('#towns li');
   let input = document.querySelector('#searchText');
   let regex = new RegExp(input.value, 'i');
   let results = 0;
   for (let town of towns) {
      if (regex.test(town.textContent)) {
         results += 1;
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
     } else {
         town.style.textDecoration = 'unset';
         town.style.fontWeight = 'unset';
     }

   }
   document.querySelector('#result').textContent = `${results} matches found`;
}
