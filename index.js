const todoButton = document.getElementById("button-add");
const todoInput = document.getElementById("todo-input");
const todoListActive = document.getElementById("todo-list-active")
const todoListDone = document.getElementById("todo-list-done");

todoButton.addEventListener("click", addToList);
todoInput.addEventListener("input", setTodoValue);


let todoInputValue = "";
let todoList = [];

function setTodoValue(event) {
    todoInputValue = event.target.value;
    todoInput.value = todoInputValue;
};

// NEW FUNCTION GENERATES UNIQUE ID FOR NEWEST INPUT (CALLED IN newListItem())
function generateUniqueID() {
    let listNumber = todoList.length + 1;
    const uniqueID = `${listNumber}`;
    return uniqueID;
}

//NEW FUNCTION FOR ADDING MOST RECENT INPUT AS A .TODO-ITEM to #TODO-LIST-ACTIVE (CALLED IN addToList())
function generateList() {
    todoListActive.innerHTML = "";
    todoList.forEach(function(listItem) {
        todoListActive.insertAdjacentHTML(
            "beforeend",
            `<div class="todo-item" id="${listItem.id}">
                <input type="checkbox" class="todo-checkbox" id="checkbox-${listItem.id}" ${listItem.checked ? "checked" : ""}/>
                <p id="todo-item-${listItem.id}">${listItem.value}</p>
                <button onclick="deleteTask(this)" type="button">X</button>
            </div>`
        );
    }); 
};

const deleteTask = (buttonEl) => {
    const itemToDelete = todoList.find((item) => item.id === buttonEl.parentElement.id);
    todoList = todoList.filter((item) => item.id !== itemToDelete.id);
    generateList();
}

function createTodoListItem(todoValue) {
    return {
        id: generateUniqueID(),
        value: todoValue,
        checked: false
    }
};


function addToList() {
    const item = createTodoListItem(todoInputValue)
    todoList.push(item);
    todoInput.value = "";
    console.log(todoList);
    generateList();
}


/*TESTING - FUNCTION TO REMOVE "INVISIBLE" CLASS, MAKING ELEMENT VISIBLE. 
WORKS WITH ITEMS THAT ARE ALREADY IN THE INDEX.HTML BUT CAN'T GET IT TO WORK WITH
ELEMENTS THAT ARE ADDED TO THE HTML VIA JAVASCRIPT*/
const testButton = document.getElementById("test-button-invisible");

function makeTodoItemCopyVisible() {
    todoItemDoneClass = document.getElementById("invisible");
    todoItemDoneClass.classList.remove("invisible");
};

testButton.addEventListener("click", makeTodoItemCopyVisible);


//TEST Moving Element down with event listener

const testPara = document.getElementById("test-paragraph");
const buttonTestPara = document.getElementById("test-button-paragraph");

function moveParaDown() {
    todoListDone.appendChild(testPara);  
    console.log("Test Button is working");
};

buttonTestPara.addEventListener("click", moveParaDown);