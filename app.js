const tasksDom = document.querySelector(".tasks");
const btnSubmit = document.getElementById("btn");

// var editBtns = document.querySelectorAll(".edit");

var tasksArray = [
  {
    id: 0,
    taskContent: "Javscript concepts",
  },
  {
    id: 1,
    taskContent: "javascript projects",
  },
  {
    id: 2,
    taskContent: "javascript testing",
  },
];

// Get Tasks from array
function getTasks() {
  console.log(tasksArray);
  let sum = "";
  if (tasksArray.length === 0) return "No task available";
  tasksArray.forEach((task) => {
    sum =
      sum +
      `
<div class="task-content" style="margin-bottom: 16px">
 <p id="taskContent" class="taskContentClass">${task.taskContent}</p>
 <div class="buttons">
   <span class="material-symbols-outlined edit"> edit </span>
   <span class="material-symbols-outlined delete"> delete </span>
 </div>
</div>
 `;
    const editBtn = document.querySelector(".edit");
    console.log(editBtn);
  });
  return sum;
}

tasksDom.innerHTML = getTasks();

// Add task into array
const inputValue = document.getElementById("inputValue");
btnSubmit.addEventListener("click", addTask);
var id;
function addTask() {
  for (let i = 0; i < tasksArray.length; i++) {
    if (tasksArray[i].id === id) {
      tasksArray[i].taskContent = inputValue.value;
      let sum = getTasks();
      tasksDom.innerHTML = sum;
      tasksContent = document.querySelectorAll(".task-content");
      return;
    }
  }
  tasksArray.push({
    id: Math.random(),
    taskContent: `${inputValue.value}`,
  });
  inputValue.value = "";
  let sum = getTasks();
  tasksDom.innerHTML = sum;
}

// Edit task
var tasksContent = document.querySelectorAll(".task-content");

tasksContent.forEach((task, index) => {
  task.children[1].children[0].addEventListener("click", (event) => {
    let e = task.children[0].textContent;
    inputValue.value = e;
    id = getIDtask(index);
    // console.log(task.children[1].children[0]);
    //  let e = event.currentTarget.children[0].textContent;
    // console.log(tasksArray[index].taskContent);
    // tasksArray[index].taskContent = e;
    // let sum = getTasks();
    // tasksDom.innerHTML = sum;
  });
});

function getIDtask(id) {
  return id;
}

// Delete task

tasksContent.forEach((task, index) => {
  let deleteBtn = task.children[1].children[1];
  console.log(deleteBtn);
  deleteBtn.addEventListener("click", (event) => {
    console.log(index);
    // tasksArray = deleteTask(index);
    //  getTasks();
    // tasksDom.innerHTML = sum;
  });
});

function deleteTask(id) {
  const newTaskArray = tasksArray.filter((task) => task.id !== id);
  return newTaskArray;
}
