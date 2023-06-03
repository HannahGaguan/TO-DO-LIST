// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add event listener to add task button
function addTask() {
  const taskText = taskInput.value;

  if(taskText ===''){
    alert('Please enter a task.');
    return;
  }

  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.classList.add('done');
    doneButton.addEventListener('click', completeTask);
    li.appendChild(doneButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = '';
  }
}

// Mark a task as completed
function completeTask(event) {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle('completed');
}

// Delete a task
function deleteTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}
