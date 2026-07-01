const addTaskBtn = document.getElementById("add-task");
const input = document.getElementById("taskInput");
const section = document.querySelector(".section");
const form = document.querySelector("form");

form.addEventListener("submit", (eo) => {
  eo.preventDefault();

  const taskText = input.value.trim();
  if (!taskText) return;

  const taskDiv = document.createElement("div");
  taskDiv.className = "task";

  taskDiv.innerHTML = `
        <i class="fa-solid fa-star"></i>
        <p>${taskText}</p>
        <div>
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-face-angry"></i>
        </div>
    `;

  section.appendChild(taskDiv);
  input.value = "";
});

section.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("fa-trash")) {
    eo.target.closest(".task").remove();
  } else if (eo.target.classList.contains("fa-star")) {
    eo.target.classList.toggle("star");
    section.prepend(eo.target.closest(".task"));
  } else if (eo.target.classList.contains("fa-face-angry")) {
    eo.target.classList.remove("fa-face-angry");
    eo.target.classList.add("fa-heart");
    eo.target.closest(".task").classList.add("completed");
  } else if (eo.target.classList.contains("fa-heart")) {
    eo.target.classList.remove("fa-heart");
    eo.target.classList.add("fa-face-angry");
    eo.target.closest(".task").classList.remove("completed");
  }
});