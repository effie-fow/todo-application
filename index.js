const todoButton = document.getElementById("button-add");
const todoInput = document.getElementById("todo-input");
const todoListActive = document.getElementById("todo-list-active")
let todoInputValue = "";
let todoList = [];



function setTodoValue(event) {
    todoInputValue = event.target.value;
    todoInput.value = todoInputValue;
};

// NEW FUNCTION GENERATES UNIQUE ID FOR NEWEST INPUT (CALLED IN newListItem())
function generateUniqueID() {
    let listNumber = todoList.length;
    const uniqueID = `Todo-item-${listNumber}`;
    return uniqueID;
}

//NEW FUNCTION FOR ADDING MOST RECENT INPUT AS A .TODO-ITEM to #TODO-LIST-ACTIVE (CALLED IN addToList())
function newListItem() {
    let newestInputIndex = todoList.length -1 ;
    let newestInputStr = todoList[newestInputIndex];
    
    console.log(newestInputIndex);
    console.log(newestInputStr);

    todoListActive.insertAdjacentHTML(
        "beforeend",
        `<div class="todo-item" id="todo-item">
            <input type="checkbox" class="todo-checkbox" id="${generateUniqueID()}"/>
            <p>${newestInputStr}</p>
        </div>`
    );

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