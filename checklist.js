// Cria uma nova tarefa na lista de tarefas quando clicar no botão ADD ou pressionar ENTER no teclado
function addNewTodo(event) {
  if (event && event.keyCode !== 13) return;

  const li = document.createElement("li");
  const inputTodo = document.getElementById("inputTodo").value;
  let t = document.createTextNode(inputTodo);
  li.appendChild(t);
  if (inputTodo === "") {
    alert("Digite alguma tarefa!");
  } else {
    document.getElementById("ulTodo").appendChild(li);
  }
  document.getElementById("inputTodo").value = "";

  //cria o icone para excluir a tarefa da lista
  const span = document.createElement("SPAN");
  const iconDelete = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(iconDelete);
  li.appendChild(span);

  span.onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Clicando no botão para excluir a tarefa da lista
const closesButton = document.querySelectorAll(".close");

closesButton.forEach((_, checklist) => {
  closesButton[checklist].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
});

// Marca/desmarca a tarefa como feita quando clicar em algum item da lista
const todoList = document.getElementById('ulTodo');
todoList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    }
  },
  false
);

