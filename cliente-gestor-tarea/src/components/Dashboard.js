// src/components/Dashboard.js
import TaskList from './TaskList';

const Dashboard = (tasks) => {
  const container = document.createElement('div');
  container.className = 'dashboard-container';
  container.appendChild(TaskList(tasks));
  return container;
};

export default Dashboard;
