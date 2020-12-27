//DOM Selection
const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todoList');

//AddEventListener
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', delOption);

//function addTodo

function addTodo(event){
    event.preventDefault()
    
    //TODO DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

   //Create List Item
    const todoItem = document.createElement('li');
    todoItem.innerText = todoInput.value;
    todoItem.classList.add("todoItem");
    todoDiv.appendChild(todoItem);


    
    //ADDTODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value)
  
   //Delete button
     const delTodo = document.createElement('button');
     delTodo.innerHTML = `x`;
     delTodo.classList.add("delTodo");
     todoDiv.appendChild(delTodo);

     //APPEND TO LIST
     todoList.appendChild(todoDiv);
     todoInput.value = '';

}  

function delOption(e){
const item = e.target
   if(item.classList[0] === 'delTodo'){
const todo = item.parentElement
    todo.remove()
   }
  
}

function saveLocalTodos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodos(){

    let todos;
 
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
  
    todos.forEach(function(todo){
     //TODO DIV
     const todoDiv = document.createElement('div');
     todoDiv.classList.add("todo");
 
    //Create List Item
     const todoItem = document.createElement('li');
     todoItem.innerText = todo;
     todoItem.classList.add("todoItem");
     todoDiv.appendChild(todoItem);
 
   
    //Delete button
      const delTodo = document.createElement('button');
      delTodo.innerHTML = `x`;
      delTodo.classList.add("delTodo");
      todoDiv.appendChild(delTodo);
 
      //APPEND TO LIST
      todoList.appendChild(todoDiv);
    });
}

