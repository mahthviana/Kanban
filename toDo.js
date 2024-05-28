// input para criação de nova tarefa
const newTaskInput = document.getElementById('new-task');
const newTaskBtn = document.querySelector('.adicionar');

// colunas de tarefas
const toDo = document.querySelector('.toDo');
const inProgress = document.querySelector('.inProgress');
const concluded = document.querySelector('.concluded');

//  cria nova tarefa
const addTask = () => {
    const inputValue = newTaskInput.value.trim();
    if (newTaskInput !== "") {
        
        const p = document.createElement('p');
        p.innerHTML =  `${inputValue}`;

        p.setAttribute('draggable', 'true');
        
        p.classList.add('task');

        toDo.appendChild(p);
        newTaskInput.value = "";

        p.addEventListener('dragstart', dragStart);
        

    }
}

const dragStart = (event) => {
    event.dataTransfer.setData('text/plain', event.target.id);
}

const dragOver = (event) => {
    event.preventDefault();
}

const dragEnter = (event) => {
    event.preventDefault();
}

const dragLeave = (event) => {
    event.preventDefault();
}

// zona para dropar o elemento
const drop = (event) => {
    event.preventDefault()
    console.log(event)
    const data = event.dataTransfer.getData('text/plain');
    
    const draggedElement = document.getElementById(data);
    console.log(draggedElement)

    const targetDiv = event.target.closest('.containerAddTask').querySelector('.task-container')
    console.log(targetDiv)

    draggedElement.parentNode.removeChild(draggedElement);



    if (targetDiv.classList.contains('inProgress')) {
        draggedElement.classList.add('inProgress');
    } else if (targetDiv.classList.contains('concluded')) {
        draggedElement.classList.add('concluded');
    }
}

// adição de manipuladores de evento para as divs
inProgress.addEventListener('dragover', dragOver);
inProgress.addEventListener('dragenter', dragEnter);
inProgress.addEventListener('dragleave', dragLeave);
inProgress.addEventListener('drop', drop);

concluded.addEventListener('dragover', dragOver);
concluded.addEventListener('dragenter', dragEnter);
concluded.addEventListener('dragleave', dragLeave);
concluded.addEventListener('drop', drop);

// adciona a tarefa na coluna toDo
newTaskBtn.addEventListener('click', addTask)
newTaskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addTask()
    }
})


document.addEventListener('DOMContentLoaded', function () {
    const tasks = document.querySelectorAll('.task');

    // Adicione manipuladores de eventos de arrastar para cada tarefa
    tasks.forEach(task => {
        task.addEventListener('dragstart', dragStart);
    });

    // Adicione manipuladores de eventos de arrastar nas divs de destino
    const dropzones = document.querySelectorAll('.inProgress, .concluded');
    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', dragOver);
        dropzone.addEventListener('dragenter', dragEnter);
        dropzone.addEventListener('dragleave', dragLeave);
        dropzone.addEventListener('drop', drop);
    });
});