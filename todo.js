const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const Todos_Ls =  "toDos"



function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span =document.createElement("span");
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);

}

function handleTodos(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){
    const toDos = localStorage.getItem(Todos_Ls);
    if (toDos !== null) {

    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleTodos);
}
init();