import html from '../js/core.js'


//Destructing : // gióng qua ToDolist đc:   { todoKey } = {todoKey: todo} 
function ToDoItem({ todoKey, index }) {
    // console.log(todoKey.title)
    return html `
        <li class="${todoKey.completed && 'completed'}">
            <div class="view">
                <input class="toggle" type="checkbox" 
                ${todoKey.completed && 'checked'}
                onchange = "dispatch('toggle', ${index})"
                >
                <label>${todoKey.title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${todoKey.title}">
        </li>
    `
}

export default ToDoItem