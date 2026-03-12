const taskName = document.getElementById("taskName");
const btnTask = document.getElementById("btnTask");
const notInitiated = document.getElementById("notInitiated");

let listTask = [];

function addNewTask() {
  if (taskName.value === '') {
    alert("task");
    return;
  }

  const task = {
    name: taskName.value
  }

  listTask.push(task)

  console.log(listTask)
  taskName.value = ''
}


btnTask.addEventListener('click', addNewTask)