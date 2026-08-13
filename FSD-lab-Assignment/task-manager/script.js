const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Init
document.addEventListener("DOMContentLoaded", () => {
	loadTasks();
	renderTasks();
});

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
	if (event.key === "Enter") addTask();
});

function addTask() {
	const text = taskInput.value.trim();
	if (!text) return;

	const newTask = { id: Date.now(), text, completed: false };
	tasks.push(newTask);
	saveTasks();
	renderTasks();

	taskInput.value = "";
	taskInput.focus();
}

function toggleComplete(id) {
	const t = tasks.find(x => x.id === id);
	if (!t) return;
	t.completed = !t.completed;
	saveTasks();
	renderTasks();
}

function deleteTask(id) {
	tasks = tasks.filter(t => t.id !== id);
	saveTasks();
	renderTasks();
}

function renderTasks() {
	taskList.innerHTML = "";

	tasks.forEach(t => {
		const taskEl = document.createElement("div");
		taskEl.className = "task" + (t.completed ? " completed" : "");

		const left = document.createElement("div");
		left.style.display = "flex";
		left.style.alignItems = "center";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = t.completed;
		checkbox.addEventListener("change", () => toggleComplete(t.id));

		const span = document.createElement("span");
		span.className = "task-text";
		span.textContent = t.text;
		span.addEventListener("click", () => toggleComplete(t.id));

		left.appendChild(checkbox);
		left.appendChild(span);

		const deleteBtn = document.createElement("button");
		deleteBtn.className = "delete-btn";
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", () => deleteTask(t.id));

		taskEl.appendChild(left);
		taskEl.appendChild(deleteBtn);
		taskList.appendChild(taskEl);
	});
}

function saveTasks() {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
	try {
		const raw = localStorage.getItem("tasks");
		tasks = raw ? JSON.parse(raw) : [];
	} catch (e) {
		tasks = [];
	}
}