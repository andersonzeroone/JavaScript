var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){

    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var closeElement = document.createElement('span');
        var pos = todos.indexOf(todo);
        closeElement.setAttribute('onclick', 'deleteTodo('+pos+')')
        var closeText = document.createTextNode('\u00D7');
        closeElement.className = "close";

        closeElement.appendChild(closeText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(closeElement);
   
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;
  
    todos.push(todoText)
    inputElement.value = ''
    renderTodos();
    saveToStorage()
    
}

function deleteTodo(pos){
    todos.splice(pos,1);
    renderTodos()
    saveToStorage()
}

function saveToStorage(){  
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
 if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
    }
}, false);

const html = document.querySelector("html");
const checkbox = document.querySelector("#switch");

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style) 

const initialColor = {
    bgg: getStyle(html, "--bgg"),
    bgTitle: getStyle(html, "--bg-title"),
    bgBnt: getStyle(html, "--bg-bnt"),
    bgBntcheck: getStyle(html, "--bg-bntcheck")
    
}

const darkMode = {
    bgg: '#1d1c1c',
    bgTitle: '#EBEBEB',
    bgBntcheck:'#3664FF'


}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map( key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColor)
})