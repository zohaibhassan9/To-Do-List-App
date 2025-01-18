const inputItem = document.getElementById('inputItem');
const addTask = document.getElementById('addBtn');
const taskList = document.getElementById('addBtn')




addTask.addEventListener('click', ()=>{
    const textTask = inputItem.value.trim()
    if(textTask === ''){
        alert('To add a task, you must put a value')
        return;
    }
})

