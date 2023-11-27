var taskslist=localStorage.getItem("tasks");
var tasks=taskslist.split(",");
console.log(typeof(tasks),tasks)
for (let i = 1; i < tasks.length; i++) {
    console.log(tasks[i]);
    document.querySelector("input").value=tasks[i];
    addtaskbylist();
}

function addtask(){
    str = document.querySelector("input").value;
    const node = document.createElement("div");
    const textele1 = document.createElement("p");
    textele1.innerText = str;
    tasks.push(str);
    console.log(tasks);
    
    localStorage.setItem("tasks",tasks);

    const svgCode = '<svg height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
    const svgContainer = document.createElement("div");
    svgContainer.innerHTML = svgCode;
    svgContainer.onclick=remove;
    node.className="task";
    node.appendChild(textele1);
    node.appendChild(svgContainer);
    
    const p = document.getElementById("tasklist");
    p.appendChild(node);  // Changed from appendchild to appendChild
    document.querySelector("input").value=""
}

function addtaskbylist(){
    str = document.querySelector("input").value;
    const node = document.createElement("div");
    const textele1 = document.createElement("p");
    textele1.innerText = str;
    // tasks.push(str);
    // console.log(tasks);

    const svgCode = '<svg height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
    const svgContainer = document.createElement("div");
    svgContainer.innerHTML = svgCode;
    svgContainer.onclick=remove;
    node.className="task";
    node.appendChild(textele1);
    node.appendChild(svgContainer);
    
    const p = document.getElementById("tasklist");
    p.appendChild(node);  // Changed from appendchild to appendChild
    document.querySelector("input").value=""
}


function remove() {
    this.parentElement.remove();
    deltask=this.parentElement.firstChild.innerText;
    console.log(deltask);
    tasks.pop(deltask);
    console.log(tasks);
    localStorage.setItem("tasks",tasks);
}
