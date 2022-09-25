let todoBtnE1 =  document.getElementById("todoBtn");
let todoArea = document.getElementById("todoArea");
let todoInput = document.getElementById("inputValue");


todoBtnE1.addEventListener('click', function addTodo(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = todoInput.value;
    todoArea.appendChild(paragraph);
    todoInput.value = "";
    paragraph.addEventListener('click', function())
});