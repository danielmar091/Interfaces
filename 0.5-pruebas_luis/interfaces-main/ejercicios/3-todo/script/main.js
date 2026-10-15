// This is optional
console.log('💿 Loading, please wait...');

// Let's get the needed elements
const taskNewTitle = document.querySelector('#task-new-title');
const taskNewSend = document.querySelector('#task-new-send');
const tasksList = document.querySelector('#tasks-list');

taskNewSend.addEventListener('click', function() {
    // Let's get input's value
    const title = taskNewTitle.value;

    // Let's check if a title exist in the input, then, create the task
    if(title != '') {
        addNewTask(title);
    }
})

// Tasks factory
function addNewTask(title){
    console.log('Adding new task: ' + title);
    
    const taskContainer = document.createElement('p');
    const taskDelete = document.createElement('span');

    taskContainer.innerText = title;
    taskDelete.innerText = '❌';

    // When user pushes the button, remove the element
    taskDelete.addEventListener('click', function(){
        // 'this' is for the element itselfs
        this.parentNode.remove();
    })

    taskContainer.appendChild(taskDelete);
    tasksList.appendChild(taskContainer);

    reset();
}

// Let's clear the input and put the cursor ready to type a new title
function reset(){
    taskNewTitle.value = '';
    taskNewTitle.focus();
}