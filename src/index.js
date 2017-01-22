document.body.onload = addTodo;

let state = {
  todos:[
    {title: 'First todo', complete: false},
    {title: 'Second todo', complete: true},
    {title: 'Third todo', complete: false},
  ],
}

function addTodo(){
  let item = state["todos"];
  for(var key in item){
    let newLi = document.createElement("li");
    if(item[key].complete === true) { 
      newLi.className = "todo--complete";
    }
    let todotitle = item[key].title;
    let newTodo = document.createTextNode(`Hi! ${todotitle}`);
    newLi.appendChild(newTodo);
    let todoList = document.getElementById('todos');
    todoList.appendChild(newLi);
  }
}

console.log( 'Open the dev console to see me. :-)' );

