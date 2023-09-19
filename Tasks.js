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
export function handleGetTasks() {
  return tasksArray;
}

  //   const divTask = document.createElement("div");
  //   const p = document.createElement("p");
  //   const buttons = document.createElement("div");
  //   const editBtn = document.createElement("span");
  //   const deleteBtn = document.createElement("span");
  //   divTask.classList.add("task-content");
  //   divTask.style.marginBottom = "16px";
  //   p.classList.add("paragraphe", "taskContentClass");
  //   p.textContent = `${inputValue.value}`;
  //   buttons.classList.add("buttons");
  //   editBtn.classList.add("material-symbols-outlined", "edit");
  //   editBtn.textContent = "edit";
  //   deleteBtn.classList.add("material-symbols-outlined", "delete");
  //   deleteBtn.textContent = "delete";
  //   divTask.appendChild(p);
  //   divTask.appendChild(buttons);
  //   buttons.appendChild(editBtn);
  //   buttons.appendChild(deleteBtn);
  //   console.log(divTask);
  //   tasks.appendChild(divTask);
