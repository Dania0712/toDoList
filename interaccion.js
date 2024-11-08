document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Es necesario que escribas una tarea');
        return;
    }

    // Crear el elemento de la lista
    const li = document.createElement('li');
    li.textContent = taskText;

    // Crear el botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    //Botón al item de la lista
    li.appendChild(deleteBtn);

    // Tarea al listado
    document.getElementById('taskList').appendChild(li);

    // Limpiar el campo de entrada
    taskInput.value = '';
});