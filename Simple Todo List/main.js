let todoBtnE1 =  document.getElementById("todoBtn");
let todoArea = document.getElementById("todoArea");
let todoInput = document.getElementById("todoInput");


todoBtnE1.addEventListener('click', function addTodo(){
    var paragraph = document.createElement('p')
    paragraph.innerText = todoInput.value;
    todoArea.appendChild(paragraph);
});