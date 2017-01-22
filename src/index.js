document.body.onload = addTodo;

let state = {
  todos:[
    {title: 'First todo', complete: false},
    {title: 'Second todo', complete: true},
    {title: 'Third todo', complete: false},
  ],
}

function toggleState() {
  console.log('hello');
  //console.log(selectedItem[this].complete);
}

function addTodo(){
  let item = state["todos"];
  for(var key in item){
    let newLi = document.createElement("li");
    if(item[key].complete === true) { 
      newLi.className = "todo--complete";
    }
    let todotitle = item[key].title;
    let todoLink = document.createElement('a');
    todoLink.setAttribute('href', '#');
    todoLink.setAttribute('onclick','toggleState()');
    let newTodo = document.createTextNode(`${todotitle}`);
    //newLi.appendChild(newTodo);
    todoLink.appendChild(newTodo);
    newLi.appendChild(todoLink)
    let todoList = document.getElementById('todos');
    todoList.appendChild(newLi);
  }
}

console.log( 'Open the dev console to see me. :-)' );

