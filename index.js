const todoButton = document.getElementById("button-add");
const todoInput = document.getElementById("todo-input");
const todoListActive = document.getElementById("todo-list-active")
let todoInputValue = "";
let todoList = [];



function setTodoValue(event) {
    todoInputValue = event.target.value;
    todoInput.value = todoInputValue;
};


//NEW FUNCTION FOR ADDING MOST RECENT INPUT AS A .TODO-ITEM to #TODO-LIST-ACTIVE (CALLED IN addToList())
function newListItem() {
    let newestInput = todoList.length -1 ;
    console.log(newestInput);
    console.log(todoList[newestInput]);

    todoListActive.insertAdjacentHTML(
        "beforeend",
        `<div class="todo-item">
            <input type="checkbox" class="todo-checkbox"/>
            <p>${todoList[newestInput]}</p>
        </div>`
    )
};


function addToList() {
    todoList.push(todoInputValue);
    todoInput.value = "";
    console.log(todoList);
    newListItem();
}


todoButton.addEventListener("click", addToList);
todoInput.addEventListener("input", setTodoValue);


/* TESTING - ADDS .TODO-ITEM DIV TO #TODO-LIST-ACTIVE

todoListActive.insertAdjacentHTML(
    "beforeend",  
    `<div class="todo-item">
    <input type="checkbox" name="todo-item"/>
    <p>Example: Clean the fridge</p>
    </div>`
)
*/