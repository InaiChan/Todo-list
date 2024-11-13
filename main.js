"use strict";

var button = document.getElementById('buttonTodoInput');
var inputValue = document.getElementById("input");
const element = document.getElementById("fileInfo");

const list = document.getElementById("list");

const renderToDo = () => {
    toDoList.forEach (function(todo) {
        let li = document.createElement("li");
        li.textContent = todo.value;
        list.appendChild(li);
    });
};

window.renderToDo = renderToDo;

const toDoList = new Set();
window.toDoList = toDoList;

button.addEventListener("click", function (buttonAddInput) {
    if(inputValue.value === "") {
        return
    }

    var newValue = inputValue.value;
    inputValue.value = "";
    input.value = newValue;

    toDoList.add({ value: input.value });


});