const wrapper = document.querySelector('#wrapper');

wrapper.addEventListener('click', function(e) {
  if (e.target.tagName === 'A' || e.target.parentElement.tagName === 'A') {
    e.preventDefault();

    url = new URL(e.target.href);
    
  }

});