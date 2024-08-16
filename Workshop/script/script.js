import { showNav, renderHome, renderCreate, renderDetails, renderEdit, renderLogin, renderRegister, renderSolutions } from './render.js';

const wrapper = document.querySelector('#wrapper');

const routes = {
  '/': renderHome,
  '/solutions': renderSolutions,
  '/register': renderRegister,
  '/login': renderLogin,
  '/solution/add': renderCreate,
  '/solution/edit': renderEdit,
  '/solution/details': renderDetails,
  '/logout': logOut,
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
showNav();

function logOut() {
  hideSections();  
  localStorage.setItem('auth', ''); 
  showNav();
}

function setupRouter() {

  routes[location.pathname]().style.display = 'flex';

  window.addEventListener('popstate', function(e) {
    hideSections();
    showNav();
    if (e.detail === '/logout') {
      routes[e.detail]();
    } else if (e.detail === '/solutions' || e.detail === '/') {
      routes[e.detail]().style.display = 'flex';
    } else {
      routes[e.detail]().style.display = 'block';
      routes[e.detail]().style.marginTop = '50px';
    }


  });
  
  
}
hideSections();
setUpLinks();
setupRouter();
