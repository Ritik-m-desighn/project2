// Reference to the task list container
const taskList = document.getElementById("task-list");
const createTaskBtn = document.getElementById("create-task-btn");

// Generate random color for task backgrounds
function getRandomColor() {
  const colors = ["#34d399", "#60a5fa", "#f472b6", "#fb923c", "#6ee7b7"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to create a new task
function createTask(title = "Task name", description = "Task Description") {
  const task = document.createElement("div");
  task.classList.add("task");
  task.style.backgroundColor = getRandomColor();

  task.innerHTML = `
    <div contenteditable="false" class="task-title">${title}</div>
    <div contenteditable="false" class="task-desc">${description}</div>
    <div class="task-buttons">
      <button class="edit">✏️</button>
      <button class="delete">🗑️</button>
    </div>
  `;

  // Edit functionality
  task.querySelector(".edit").addEventListener("click", (e) => {
    const isEditing = task.querySelector(".task-title").isContentEditable;

    if (isEditing) {
      // Stop editing
      task.querySelector(".task-title").contentEditable = "false";
      task.querySelector(".task-desc").contentEditable = "false";
      e.target.textContent = "✏️";
    } else {
      // Start editing
      task.querySelector(".task-title").contentEditable = "true";
      task.querySelector(".task-desc").contentEditable = "true";
      task.querySelector(".task-title").focus();
      e.target.textContent = "✅";
    }
  });

  // Delete functionality
  task.querySelector(".delete").addEventListener("click", () => {
    task.remove();
  });

  taskList.appendChild(task);
}

// Add task on button click
createTaskBtn.addEventListener("click", () => {
  createTask();
});


