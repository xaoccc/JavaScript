import { renderHome, renderCreate, renderDetails, renderEdit, renderLogin, renderRegister, renderSolutions } from './render.js';

const wrapper = document.querySelector('#wrapper');

const routes = {
  '/': renderHome,
  '/solutions': renderSolutions,
  '/register': renderRegister,
  '/login': renderLogin,
  '/solution/add': renderCreate,
  '/solution/edit': renderEdit,
  '/solution/details': renderDetails,
  '/logout': hideSections,
}

function setUpLinks() {
  wrapper.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      let url = new URL(e.target.href);
      history.pushState(null, null, url.pathname);
      window.dispatchEvent(new CustomEvent('popstate', {detail: url.pathname}));      
    }
  
  });
}

function hideSections() {
  let sections = document.querySelectorAll('section');
  sections.forEach(s => s.style.display = 'none');
  let solutionsH2 = document.querySelector('#home ~ h2');
  let noSolutionsH2 = document.querySelector('#no-solution');
  solutionsH2.style.display = 'none';
  noSolutionsH2.style.display = 'none';
 
}

function setupRouter() {
  window.addEventListener('popstate', function(e) {
    hideSections();
    (e.detail !== '/logout') ? routes[e.detail]().style.display = 'flex' : routes[e.detail]() ;

  });
  
  
}
hideSections();
setUpLinks();
setupRouter();
