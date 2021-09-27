import html from '../core.js'

//Destructing : // gióng qua ToDolist đc:   { todoKey } = {todoKey: todo} 
function ToDoItem({ todoKey }) {
    // console.log(todoKey.title)
    return html `
        <li class="${todoKey.completed && 'completed'}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todoKey.completed && 'checked'}>
                <label>${todoKey.title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${todoKey.title}">
        </li>
    `
}

export default ToDoItem