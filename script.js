const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', addTask);
taskList.addEventListener('click', completeTask);
taskList.addEventListener('click', deleteTask);

function addTask() {
  const taskText = taskInput.value;
  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="delete-button">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function completeTask(event) {
  if (event.target.tagName === 'SPAN') {
    event.target.classList.toggle('completed');
  }
}

function deleteTask(event) {
  if (event.target.classList.contains('delete-button')) {
    event.target.parentElement.remove();
  }
}

