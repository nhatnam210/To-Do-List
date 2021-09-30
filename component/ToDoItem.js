import html from '../lib/core.js'
// import { connect } from '../js/store.js'

//Destructing : // gióng qua ToDolist đc:   { todoKey } = {todoKey: todo} 
function ToDoItem({ todoKey, index, editIndex }) {
    // console.log(todoKey.title)
    return html `
        <li 
            class="
            ${todoKey.completed && 'completed'}
            ${editIndex === index && 'editing'}
        ">
            <div class="view">
                <input class="toggle" type="checkbox" 
                ${todoKey.completed && 'checked'}
                onchange = "dispatch('toggle', ${index})"
                >
                <label ondblclick="dispatch('startEdit',${index})">
                    ${todoKey.title}
                </label>
                <div class="destroy-wrap">
                    <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
                </div>
            </div>
            <input 
                class="edit" 
                value="${todoKey.title}"
                onkeyup = "event.keyCode === 13 && dispatch('endEdit',this.value.trim()) || 
                event.keyCode === 27 && dispatch('cancelEdit')" 
                onblur="dispatch('endEdit',this.value.trim())"
            >
        </li>
    `
}

export default ToDoItem