const todoButton = document.getElementById("button-add");
const todoInput = document.getElementById("todo-input");
const todoListActive = document.getElementById("todo-list-active")
const todoListDone = document.getElementById("todo-list-done");


let todoInputValue = "";
let todoList = [];



function setTodoValue(event) {
    todoInputValue = event.target.value;
    todoInput.value = todoInputValue;
};

// NEW FUNCTION GENERATES UNIQUE ID FOR NEWEST INPUT (CALLED IN newListItem())
function generateUniqueID() {
    let listNumber = todoList.length;
    const uniqueID = `${listNumber}`;
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
        `<div class="todo-item" id="todo-item-container-${generateUniqueID()}">
            <input type="checkbox" class="todo-checkbox" id="checkbox-${generateUniqueID()}"/>
            <p id="todo-item-${generateUniqueID()}">${newestInputStr}</p>
        </div>`
    );

    // WITHIN FUNCTION - ADDS AN "INVISBLE" COPY OF LIST ITEM IN "DONE" LIST
    let newestInputStrCopy = [...newestInputStr].join("");

    todoListDone.insertAdjacentHTML(
        "beforeend",
        `<div class="todo-item-done invisible" id="todo-item-container-${generateUniqueID()}-done">
        <input type="checkbox" class="todo-checkbox-done" id="checkbox-${generateUniqueID()}-done" checked/>
        <p id="todo-item-${generateUniqueID()}-done">${newestInputStrCopy}</p>
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