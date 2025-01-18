const inputItem = document.getElementById('inputItem');
const addTask = document.getElementById('addBtn');
const taskList = document.getElementById('taskList')




addTask.addEventListener('click', () => {
    const textTask = inputItem.value.trim()
    if(textTask === ''){
        alert('To add a task, you must put a value')
        return;
    }


const listItem = document.createElement('li');

const taskSpan = document.createElement('span');

taskSpan.textContent = taskText;


const deleteBtn = document.createElement('button');
deleteBtn.textContent = Delete;
deleteBtn.classList.add('delete-btn');

listItem.appendChild(taskSpan);
listItem.appendChild(deleteBtn);

taskList.appendChild(listItem);

inputItem.value = '';


taskSpan.addEventListener('click', ()=>{
taskSpan.classList.toggle('Completed');

});

deleteBtn.addEventListener('click', ()=>{
taskList.removeChild(listItem);
})

})