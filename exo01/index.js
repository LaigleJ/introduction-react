document.getElementById("addTask").addEventListener("click", function () {
    const taskName = document.getElementById("taskName").value.trim();
    let taskDate = document.getElementById("taskDate").value;
    const errorElement = document.getElementById("error");
    const taskList = document.getElementById("taskList");

    errorElement.textContent = ""; 

    if (!taskName) {
        errorElement.textContent = "Veuillez entrer un nom de tâche.";
        return;
    }

    if (!taskDate) {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0'); 
        const hours = String(now.getHours()).padStart(2, '0'); 
        const minutes = String(now.getMinutes()).padStart(2, '0'); 
        
        taskDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    } else {
        taskDate += " 00:00";
    }

    const li = document.createElement("li");
    li.innerHTML = `<span>${taskName} - ${taskDate}</span>`;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Terminer";
    completeButton.className = "btn complete";
    completeButton.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.className = "btn delete";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    document.getElementById("taskName").value = "";
    document.getElementById("taskDate").value = "";
});