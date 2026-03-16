const taskName = document.getElementById("taskName");
const btnTask = document.getElementById("btnTask");
const notInitiated = document.getElementById("notInitiated");
const started = document.getElementById("started");
const completed = document.getElementById("completed");

let listTask = [];
let idCount = 1;

function addNewTask() {
  if (taskName.value === "") {
    alert("task");
    return;
  }

  const task = {
    id: idCount,
    name: taskName.value,
  };

  listTask.push(task);
  idCount++;
  renderTask();

  console.log(listTask);
  taskName.value = "";
}
// renderizar valor na tela
function renderTask() {
  const render = listTask.map((task) => {
    return `<div class="bg-white p-3 rounded shadow-sm mb-2 cursor-move border-l-4 border-blue-500" data-id="${task.id}">${task.name}</div>`;
  });

  notInitiated.innerHTML = render.join("");
}

function initSortable() {
  new Sortable.create(notInitiated, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
  });
  new Sortable.create(started, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
  });
  new Sortable.create(completed, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
  });
}

initSortable();
btnTask.addEventListener("click", addNewTask);
