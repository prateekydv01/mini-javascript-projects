document.addEventListener('DOMContentLoaded',()=>{
const todoInput = document.getElementById('todo-input')
const addTaskButton= document.getElementById('add-task-btn')
const toDoList=document.getElementById('todo-list')

let tasks=JSON.parse(localStorage.getItem('tasks')) || []
tasks.forEach(task => {
    renderTask(task)
});
addTaskButton.addEventListener('click',()=>{
    const taskText = todoInput.value.trim();
    if(taskText==="")return;

    const newTask={
        id:Date.now(),
        text:taskText,
        completed:false
    }
    tasks.push(newTask)
    saveTasks()
    renderTask(newTask)
    todoInput.value=""; //clears input
    console.log(tasks);
    
});

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
    //sending data to local storage so it should be in key:value pair here key can be anything but it is preferable to tkae string and key must be string
}

function renderTask(task){
    console.log(task.text);
    const li =document.createElement('li')
    li.setAttribute('data-id',task.id);
    if(task.completed) li.classList.add("completed")
    li.innerHTML= `<span>${task.text}</span>
    <button>delete</button>`
    li.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON') return;
        task.completed = !task.completed
        li.classList.toggle('completed')
        saveTasks()
    })
    li.querySelector('button').addEventListener('click',(e)=>{
        e.stopPropagation() //prevent toggle from firing
        tasks = tasks.filter(t=>t.id!==task.id) //study more about filter
        li.remove()
        saveTasks()
    })

    toDoList.appendChild(li)
}
})

