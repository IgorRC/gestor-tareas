// src/components/TaskItem.js
const TaskItem = (task) => {
  const item = document.createElement('div');
  item.className = 'task-item';
  item.innerHTML = `
    <h2>${task.title}</h2>
    <p>${task.description}</p>
  `;

  return item;
};

export default TaskItem;
