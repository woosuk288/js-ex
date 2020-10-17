const toDoform = document.querySelector('.js-toDoForm'),
  toDoInput = toDoform.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = "toDos";

let todos = [];

deleteTodo = (event) => {
  // console.dir(event.target.parentNode);
  const li = event.target.parentNode;
  toDoList.removeChild(li);

  const cleanTodos = todos.filter(todo => todo.id !== parseInt(li.id) );
  // todo.id > string, li.id > number
  // console.log(cleanTodos);
  todos = cleanTodos;
  saveTodos();
}

saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

paintTodo = (text) => {
  console.log(`text : ${text}`)
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  delBtn.classList.add('control-delete')
  const span = document.createElement("span");
  const newId = todos.length + 1;
  delBtn.addEventListener("click", deleteTodo);

  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const todoObj = {
    text: text,
    id: newId,
  }
  todos.push(todoObj);
  saveTodos();
}

handleSubmit = (e) => {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}

loadToDos = () => {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach((todo) => {
      paintTodo(todo.text);
    })
    // console.log(parsedToDos);
  }
}

init = () => {
  loadToDos();
  toDoform.addEventListener("submit", handleSubmit);
}
init();