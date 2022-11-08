let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        unique_no: 1
    },
    {
        text: "Learn CSS",
        unique_no: 2
    },
    {
        text: "Learn JavaScript",
        unique_no: 3
    }
];

function createAndAppendTodo(todo) {
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + todo["unique_no"]; //checkbox id 
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = "label" + todo["unique_no"]; // id for Label
    labelContainer.appendChild(labelElement);

    inputElement.onclick = function() {
        labelElement.classList.toggle("checkbox-label2");
    };

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);

    deleteIcon.onclick = function() {
        todoItemsContainer.removeChild(todoElement);
    }


    let textInputEl = document.getElementById("todoUserInput");
    textInputEl.value = "";
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

let textInputEl = document.getElementById("todoUserInput");
textInputEl.setAttribute("placeholder", "What needs to be done ?");

let count = todoList.length;
let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() {
    count = count + 1
    let inputElement = document.getElementById("todoUserInput");
    let newTask = inputElement.value;
    if (newTask === "") {
        alert("Please enter Valid Text");
    } else {
        let newTodo = ({
            "text": newTask,
            unique_no: count
        });
        createAndAppendTodo(newTodo);
    }
};