document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");
 form.addEventListener("submit",submitEvent);

function submitEvent(e){
  e.preventDefault();
handleToDo(e.target[0].value);
form.reset()
  
}
});

function handleToDo(todo){
  const li = document.createElement("li");
  const btn = document.createElement("button")
  btn.addEventListener("click", handleDelete)
  btn.textContent = "Delete";
btn.style.marginLeft = "10px";


  li.append(todo);
  li.appendChild(btn)
  const mainList = document.getElementById("tasks");
  mainList.appendChild(li);
  // console.log(mainList)
}

function handleDelete(e){
e.target.parentNode.remove()
}