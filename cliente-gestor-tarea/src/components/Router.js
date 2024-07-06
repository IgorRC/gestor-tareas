// src/router.js
import Home from './components/home.js';
import Login from './components/login.js';

const routes = {
  '/': Home,
  '/login': Login,
};

const router = () => {
  const hash = window.location.hash || '#/';
  const page = routes[hash.slice(1)] || Home;
  const content = document.getElementById('content');
  content.innerHTML = '';
  content.appendChild(page());
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
