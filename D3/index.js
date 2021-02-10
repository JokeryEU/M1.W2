//   const task = document.getElementById("newTask");
//   const addTask = document.getElementById("addTask");
//   const removeFirst = document.getElementById("removeFirst");
//   const removeLast = document.getElementById("removeLast");
//   const table = document.getElementById("myTaskList");
//   const backgroundColor = document.getElementById("colorPicker");
//   const sort = document.getElementById("sort");

//   addTask.onclick = function (event) {
//     const add = event.target;
//   };

function addNewTask() {
  const task = document.getElementById("newTask").value;
  const ul = document.getElementById("myTaskList");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);
  document.getElementById("newTask").value = "";
}
