const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//할 일 목록을 로컬 스토리지에 저장하는 함수를 정의. 배열을 JSON 문자열로 변환하여 저장.
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//할 일을 삭제하는 함수를 정의. 클릭된 삭제 버튼이 속한 리스트 요소를 찾아서 삭제하고, 배열에서 해당 할 일을 제거한 후, 변경된 할 일 목록을 저장.
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  //선택된 할 일의 id와 일치하지 않는 모든 할 일이 새로운 배열로 만들어집니다. 
  //parseInt() 함수를 사용하여 <li> 요소의 id를 정수로 변환하고, 이를 기반으로 필터링 작업을 수행
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
