
const text = document.querySelector("#text-area");
const form = document.querySelector("#todo-form");
const todocontainer = document.querySelector(".todo-container");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const todotext = text.value.trim();
    if (todotext === "") return;

    const todoitem = document.createElement("li");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");

    const todotextSpan = document.createElement("span");
    todotextSpan.innerText = todotext;

    const deletion = document.createElement("button");
    deletion.innerText = "Delete";
    deletion.classList.add("delete-btn");

    // Mark task as completed
    checkbox.addEventListener("change", function () {
        todoitem.classList.toggle("completed", checkbox.checked);
    });

    // Delete task
    deletion.addEventListener("click", function () {
        todoitem.remove();
    });

    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(todotextSpan);
    todoitem.appendChild(todoDiv);
    todoitem.appendChild(deletion);
    todocontainer.appendChild(todoitem);

    text.value = "";
});