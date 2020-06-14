const addTask = document.querySelector('input');
const button = document.querySelector('button');
const listField = document.querySelector('.task-list');
const deleteButton = document.querySelector('.btn-primary');
const task = [];

// update ui
const updateUI = () =>  {
    if (task.length === 0) {
       listField.style.display = 'none'; 
    } else {
        listField.style.display = 'block';
    }
};

let input;
// render task
const renderNewTask = (tasksToDo)    => {
    let input = document.createElement('input');
    input.classList.add = 'tick';
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'checkbox');
    const newTaskElement = document.createElement('li');
    const h3 = document.createElement('h3');
    h3.textContent = tasksToDo;
    input.addEventListener('change', (e)=>{
        if (e.target.checked) {
            h3.style.textDecoration = 'line-through';
            h3.style.color = '#ff0000';
            newTaskElement.classList.add = 'ticked';
            

        } else {
            h3.style.textDecoration = 'none';
            h3.style.color = 'black';
        }
    });
    h3.appendChild(input);  

    newTaskElement.appendChild(h3);
    listField.appendChild(newTaskElement);
    };


// clear task
const clearUserInput = () => {
    addTask.value = '';
};


// adding task
const addTaskHandler = ()   =>{
    const userInput = addTask.value;
    if (
        userInput.trim() === '' 
    ) {
        alert('Please enter a valid text');
        return;
    }
   
    const newTask = {task1: userInput,};
    task.push(newTask);
    console.log(task);
    clearUserInput();
    updateUI();
    renderNewTask(
        newTask.task1);
};

button.addEventListener('click', addTaskHandler);
deleteButton.addEventListener('click', (e) =>  {
        const ul = document.querySelector('.task-list');
        const list = document.querySelectorAll('ticked');
    ul.remove(list);
    });
