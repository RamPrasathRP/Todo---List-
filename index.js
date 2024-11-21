// Variables 


const form = document.querySelector('form')
const taskList = document.querySelector('#task-list')

// Function for adding tasks ...

function addTask(task){
    const listItem = document.createElement('li')
    listItem.innerHTML = `<input type ="checkbox" /> <span>${task}</span><button>Delete</button>`
    taskList.appendChild(listItem)
}


form.addEventListener('submit', (event)=>{
    // preventDefault ... => prevent page refershing.....
    event.preventDefault();
    const input = document.querySelector('#task-input')
    const task = input.value
    addTask(task)
    input.value = ''
})



// delete task when the delete button is clicked
taskList.addEventListener('click',(event)=>{
   if(event.target.tagName === 'BUTTON'){
        const listItem = event.target.parentElement
        taskList.removeChild(listItem);
   }
})
