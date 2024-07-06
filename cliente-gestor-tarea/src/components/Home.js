// src/components/home.js
import TaskList from './Tasklist.js';

const Home = () => {
  const container = document.createElement('div');
  container.className = 'container starter-template';
  container.innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Bienvenido a la Gestión de Tareas</h1>
      <p class="lead">Esta es una aplicación sencilla para gestionar tus tareas.</p>
    </div>
  `;
  const tasks = [
    { title: 'Tarea 1', description: 'Descripción de la tarea 1' },
    { title: 'Tarea 2', description: 'Descripción de la tarea 2' },
  ];
  container.appendChild(TaskList(tasks));
  return container;
};

export default Home;
