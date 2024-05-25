const todoButton = document.getElementById("button-add");
const todoInput = document.getElementById("todo-input");
let todoInputValue = "";
let todoList = [];



function setTodoValue(event) {
    todoInputValue = event.target.value;
    todoInput.value = todoInputValue;
};


function addToList() {
    todoList.push(todoInputValue);
    todoInput.value = "";
    console.log(todoList);
}






todoButton.addEventListener("click", addToList);
todoInput.addEventListener("input", setTodoValue);