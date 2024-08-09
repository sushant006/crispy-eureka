const toDoInput = document.getElementById('todoInput');
const toDoButton = document.getElementById('addTodoButton');
const toDoList = document.getElementById('todoList');
const deleteButton = document.getElementById('deleteButton');
function addToDo() {
    const todoText = toDoInput.value.trim();
    if (todoText !== '') {
        const listItem = document.createElement('li');
        // const checkbox = document.createElement('input');
        // checkbox.type = 'checkbox';
        // checkbox.addEventListener('change', function () {
        //     if (checkbox.checked) {
        //         listItem.classList.add('completed');
        //     } else {
        //         listItem.classList.remove('completed');
        //     }
        // });

        // listItem.appendChild(checkbox);
        listItem.textContent = todoText;
        toDoList.appendChild(listItem);
        toDoInput.value = '';
    }
}
function clearList() {
    toDoList.innerHTML = '';
}
toDoButton.addEventListener('click', addToDo);
deleteButton.addEventListener('click', clearList);
toDoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addToDo();
    }
});