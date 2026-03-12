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

function renderTask() {
  const render = listTask.map((task) => {
    return `<div bg-white, p-4, rounded-lg, shadow, mb-2, cursor-move data-id"${task.id}">${task.name}</div>`;
  });

  notInitiated.innerHTML = render.join("");
}

btnTask.addEventListener("click", addNewTask);
