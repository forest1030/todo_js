const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const Todos_Ls =  "toDos"

const toDos = []; //여러개를 리스트로 저장해야함으로 빈 array 생성

function saveToDos(){
    localStorage.setItem(Todos_Ls, JSON.stringify(toDos)) //localstorage는 string만 저장이 되어서 toDos를 string으로 변환시켜야 한다.
}


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span =document.createElement("span");
    const newId = toDos.length +1;
    delBtn.innerText = "❌";
    span.innerText = text;

    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId
    toDoList.appendChild(li);

    const todoObj = {
        text: text,
        id: newId
    };
    toDos.push(todoObj); //toDos 배열안에 toDoObj를 넣는 것.
    saveToDos()

}

function handleTodos(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDos(){ 
    const loadedToDos = localStorage.getItem(Todos_Ls); //TODO_LS = todo localstorage
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); //Javasript Object Notation .. obj → string || string → obj
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });
    }
    /*
    forEach는 array에 있는 것들을 각각 한번씩 함수를 실행시켜줌. 
    parsedToDos에 있는 것들을 각각에 대해 실행
    */
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleTodos);
}
init();