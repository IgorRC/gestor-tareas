// src/components/TaskList.js
import TaskItem from './TaskItem';

const TaskList = (tasks) => {
  const list = document.createElement('div');
  list.className = 'task-list';

  tasks.forEach(task => {
    const taskItem = TaskItem(task);
    list.appendChild(taskItem);
  });

  return list;
};

export default TaskList;
