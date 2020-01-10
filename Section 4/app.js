// Define UI vars
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event liseners
loadEventListeners();

// load all event liseners
function loadEventListeners()
{
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  tasklist.addEventListener('click', removeTask)
}

function addTask(e)
{
  if( taskInput.value === '')
  {
    alert('Add a task');
    return;
  }

  // create li element
  const li = document.createElement('li');
  // Add class
  li.classList.add('collection-item');
  // create and append text node
  li.appendChild( document.createTextNode(taskInput.value) );
  // create new link element
  const link = document.createElement('a');
  link.href = "#";
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class="material-icons black-text">delete</i>';
  li.appendChild(link);
  // append li to ul
  tasklist.appendChild(li);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

function removeTask(e)
{
  if( e.target.parentElement.classList.contains('delete-item'))
  {
    console.log(e.target);
    e.target.parentElement.parentElement.remove();
  }
}

let val = taskInput;
console.log(val);