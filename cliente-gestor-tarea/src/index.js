// src/index.js

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import Navigo from 'navigo';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const router = new Navigo('/');

let currentUser = null;
let tasks = [
  { title: 'Tarea 1', description: 'Descripción de la tarea 1' },
  { title: 'Tarea 2', description: 'Descripción de la tarea 2' },
];

const renderLogin = () => {
  const main = document.createElement('main');
  main.className = 'container starter-template';
  main.appendChild(Login((username, password) => {
    if (username === 'admin' && password === 'admin') {
      currentUser = username;
      router.navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }));
  document.body.innerHTML = '';
  document.body.appendChild(main);
};

const renderDashboard = () => {
  const main = document.createElement('main');
  main.className = 'container starter-template';
  main.appendChild(Dashboard(tasks));
  document.body.innerHTML = '';
  document.body.appendChild(Header(currentUser, handleLogout, toggleUserMenu)); // Pasar toggleUserMenu
  document.body.appendChild(main);
};

const handleLogout = () => {
  currentUser = null;
  router.navigate('/');
};

const toggleUserMenu = (event) => {
  event.preventDefault();
  const dropdownMenu = event.currentTarget.nextElementSibling;
  dropdownMenu.classList.toggle('show');
};

router.on('/', renderLogin).resolve();
router.on('/dashboard', () => {
  if (currentUser) {
    renderDashboard();
  } else {
    router.navigate('/');
  }
}).resolve();
