document.addEventListener("DOMContentLoaded", function() {
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addTaskButton = document.getElementById("add-task");

    addTaskButton.addEventListener("click", function() {
        const taskText = newTaskInput.value;
        if (taskText.trim() === "") {
            return;
        }

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete">Видалити</button>
        `;
        taskList.appendChild(listItem);
        newTaskInput.value = "";

        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });
    });
});
