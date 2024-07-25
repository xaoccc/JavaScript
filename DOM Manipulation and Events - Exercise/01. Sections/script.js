function create(words) {
   let content = document.querySelector('#content');
   
   words.forEach(word => {
      let newElement = document.createElement('div');
      let p = document.createElement('p');
      content.appendChild(newElement);
      newElement.appendChild(p);
      p.style.display = 'none';
      p.textContent = word;
   });
   let clickableElements = content.children;

   Array.from(clickableElements).forEach((element) => {
      element.addEventListener('click', function(e) {         
         e.target.firstChild.style.display = 'block';
      })
   })   
}