let todobtnE1 =  document.getElementById("todobtn");
let todoArea = document.getElementById("todoArea");
let inputField = document.getElementById("inputField");


todobtnE1.addEventListener('click', function addTodo(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    todoArea.appendChild(paragraph);
});