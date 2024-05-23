document.addEventListener ('DOMContentLoaded', ()=> {
    const inputNewTask = document.getElementById('new-task');
    const newTaskBtn = document.querySelector('.adicionar');
    const TaskListToDo = document.querySelector('.toDo');

    const addTask = () => {
        const taskText = inputNewTask.value.trim();
        if (taskText != "") {
            const li = document.createElement('li');

            li.innerHTML = `<span>${taskText}</span>`;

            TaskListToDo.appendChild(li)

            inputNewTask.value = ""
        }
    }
    newTaskBtn.addEventListener('click', addTask)

    inputNewTask.addEventListener('keypress', (event) => {
        if(event.key === 'Enter') {
            addTask()
        }
    })
});