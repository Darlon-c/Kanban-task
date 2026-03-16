const taskName = document.getElementById("taskName");
const btnTask = document.getElementById("btnTask");
const notInitiated = document.getElementById("notInitiated");
const started = document.getElementById("started");
const completed = document.getElementById("completed");

let listTask = [];
let idCount = 1;

function loadToLocalStorage() {
  const saveData = localStorage.getItem("task");

  if (saveData) {
    listTask = JSON.parse(saveData);
    if (listTask.length > 0) {
      idCount = Math.max(...listTask.map((p) => p.id)) + 1;
    }
    renderTask();
  }
}

function addNewTask() {
  if (taskName.value === "" || !taskName.value.trim() ) {
    alert("Informe a tarefa");
    return;
  }

  const task = {
    id: idCount,
    name: taskName.value,
    status: "notInitiated",
  };

  listTask.push(task);
  idCount++;
  saveToLocalStorage();
  renderTask();

  taskName.value = "";
}
// renderizar valor na tela
function renderTask() {
  const taskNotInitiated = listTask.filter(
    (task) => task.status === "notInitiated",
  );
  const taskStarted = listTask.filter((task) => task.status === "started");
  const taskCompleted = listTask.filter((task) => task.status === "completed");

  notInitiated.innerHTML = taskNotInitiated
    .map(
      (task) =>
        `<div class="bg-white p-3 rounded shadow-sm mb-2 cursor-move border-l-4 border-teal-500" data-id="${task.id}">${task.name}</div>`,
    )
    .join("");

  started.innerHTML = taskStarted
    .map(
      (task) =>
        `<div class="bg-white p-3 rounded shadow-sm mb-2 cursor-move border-l-4 border-teal-500" data-id="${task.id}">${task.name}</div>`,
    )
    .join("");

  completed.innerHTML = taskCompleted
    .map(
      (task) =>
        `<div class="bg-white p-3 rounded shadow-sm mb-2 cursor-move border-l-4 border-teal-500" data-id="${task.id}">${task.name}</div>`,
    )
    .join("");
}

function initSortable() {
  new Sortable.create(notInitiated, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
    onEnd: function (evt) {
      const cardId = evt.item.dataset.id;
      const task = listTask.find((t) => t.id == cardId);

      if (evt.to.id === "notInitiated") task.status = "notInitiated";
      if (evt.to.id === "started") task.status = "started";
      if (evt.to.id === "completed") task.status = "completed";
      saveToLocalStorage();
    },
  });

  new Sortable.create(started, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
    onEnd: function (evt) {
      const cardId = evt.item.dataset.id;
      const task = listTask.find((t) => t.id == cardId);

      if (evt.to.id === "notInitiated") task.status = "notInitiated";
      if (evt.to.id === "started") task.status = "started";
      if (evt.to.id === "completed") task.status = "completed";
      saveToLocalStorage();
    },
  });
  new Sortable.create(completed, {
    group: "kanban",
    animation: 100,
    pull: true,
    put: true,
    onEnd: function (evt) {
      const cardId = evt.item.dataset.id;
      const task = listTask.find((t) => t.id == cardId);

      if (evt.to.id === "notInitiated") task.status = "notInitiated";
      if (evt.to.id === "started") task.status = "started";
      if (evt.to.id === "completed") task.status = "completed";
      saveToLocalStorage();
    },
  });
}

function saveToLocalStorage() {
  localStorage.setItem("task", JSON.stringify(listTask));
}

loadToLocalStorage();
initSortable();
btnTask.addEventListener("click", addNewTask);
