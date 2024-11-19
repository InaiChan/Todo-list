"use strict";

let data = localStorage.getItem('toDoList');
let infoList = [];

if(data !== "" && data !== null) {
    infoList = JSON.parse(data);
}

// console.log(infoList);

var button = document.getElementById('buttonTodoInput');
var inputValue = document.getElementById("input");
const element = document.getElementById("fileInfo");
const list = document.getElementById("list");

const renderToDo = () => {
    list.replaceChildren();
        toDoList.forEach (function(todo) {
            localStorage.clear();
            let div = document.createElement("div");
            let input = document.createElement("div");
            let button = document.createElement("button");
            let button2 = document.createElement("button");

            input.textContent = todo.value;
            // input.setAttribute("readonly", "readonly");
            input.classList.add("windowNewElement");
            button.classList.add("buttonTodoInput");
            button.textContent = "X";
            button2.classList.add("buttonTodoInput");
            button2.textContent = "V";
            div.appendChild(input);
            div.appendChild(button2);
            div.appendChild(button);
            list.appendChild(div);
            button.addEventListener("click", function() {
                div.remove();
                toDoList.delete(todo);
            });
            
            button2.addEventListener("click", function() {
                input.classList.toggle("windowNewElementWithTextDecoration");
                if(todo.complited === true) {
                    todo.complited = false;
                } else {
                    todo.complited = true;
                }
                // toDoList.add(todo.complited);
            });
            // localStorage.setItem('info', JSON.stringify(todo));
            // const raw = localStorage.getItem('info');
            // raw = JSON.parse(raw);
            // console.log(raw);
        });
};

window.renderToDo = renderToDo;

const toDoList = new Set();
window.toDoList = toDoList;

button.addEventListener("click", function (buttonAddInput) {
    if(inputValue.value === "") {
        return
    }
    toDoList.add({ value: input.value, complited: false });
    inputValue.value = "";
    renderToDo();
    
    localStorage.setItem('toDoList', JSON.stringify(toDoList));

    // localStorage.getItem('toDoList');

    
});