import { handleGetTasks } from "./Tasks.js";
const tasks = document.querySelector(".tasks");
const task_content = document.querySelector(".task-content");
const inputTask = document.querySelector(".input-task");
const btnSubmit = document.querySelector(".btn");
const deleteAllBtn = document.querySelector(".clear-btn");

let tasksArray = handleGetTasks();
let editId;
let editTask = false;

let tasksObject = getLocalStorage(tasksArray);

function getLocalStorage(arr) {
  return JSON.parse(localStorage.getItem("tasks", JSON.stringify(arr)));
}
function setLocalStorage(arr) {
  return localStorage.setItem("tasks", JSON.stringify(arr));
}
function getTask() {
  let sum = "";
  tasksObject.forEach((task) => {
    sum =
      sum +
      `
    <div class="task-content" style="margin-bottom: 16px">
    <p class="paragraphe taskContentClass" id="taskContent">${task.taskContent}</p>
    <div class="buttons">
      <span class="material-symbols-outlined edit" id="${task.id}"> edit </span>
      <span class="material-symbols-outlined delete" id="${task.id}"> delete </span>
    </div>
  </div>
    `;
  });
  tasks.innerHTML = sum;
}

getTask();

// Submit form
btnSubmit.addEventListener("click", (e) => addTask(e, editId));

function addTask(e, editId) {
  console.log(editId);
  if (!inputTask.value) return alert("Input should be not empty !");
  if (inputTask.value && !editTask) {
    let id = Math.random();
    tasksObject.push({
      id: id,
      taskContent: `${inputTask.value}`,
    });
    const newTask = document.createElement("div");
    newTask.classList.add("task-content");
    newTask.style.marginBottom = "16px";
    newTask.innerHTML = `
    <p class="paragraphe taskContentClass" id="taskContent">${inputTask.value}</p>
    <div class="buttons">
      <span class="material-symbols-outlined edit" id="${id}"> edit </span>
      <span class="material-symbols-outlined delete" id="${id}"> delete </span>
    </div>
    `;
    tasks.appendChild(newTask);
    setLocalStorage(tasksObject);
    tasksObject = getLocalStorage(tasksObject);
  } else {
    tasksObject[editId].taskContent = `${inputTask.value}`;
    editTask = false;
    getTask();
  }
  inputTask.value = "";
  renderUpdateBtns();
  renderDeleteBtns();
}

// Delete Task
function renderDeleteBtns() {
  const deleteBtns = document.querySelectorAll(".delete");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function (e) {
      let index = parseFloat(e.target.attributes.id.value);
      e.currentTarget.parentElement.parentElement.remove();
      /*
      Problem of type : 
      index type string so when i want to delete task from tha array
      can't do that javascript don't gives me an error
      so that why should use Typescript more stict
      so with Typescript can not fall in types error
      */
      let newTaskArray = deleteTask(index);
      console.log(newTaskArray);
      setLocalStorage(newTaskArray);
      tasksObject = getLocalStorage(newTaskArray);
    });
  });
}
renderDeleteBtns();

function deleteTask(index) {
  const newTaskArray = tasksObject.filter((task) => task.id !== index);
  return newTaskArray;
}

// Update Task
function renderUpdateBtns() {
  const updateBtns = document.querySelectorAll(".edit");
  updateBtns.forEach((updateBtn, index) => {
    updateBtn.addEventListener("click", function (e) {
      console.log(e.target.parentElement.parentElement.children[0].textContent);
      editId = index;
      editTask = true;
      inputTask.value =
        e.target.parentElement.parentElement.children[0].textContent;
    });
  });
}

renderUpdateBtns();

// Delete All items

deleteAllBtn.addEventListener("click", function () {
  tasksObject = [];
  setLocalStorage(tasksObject);
  getTask();
});
