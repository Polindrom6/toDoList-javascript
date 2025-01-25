const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <button class = "delete-btn">Delete</button >
        `;
    todoList.appendChild(li);
    taskInput.value = "";
  }
});

todoList.addEventListener("click", function (e) {
  if (
    e.target.tagName === "BUTTON" &&
    e.target.classList.contains("delete-btn")
  ) {
    e.target.parentElement.remove();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.classList.toggle("completed");
  }
});
