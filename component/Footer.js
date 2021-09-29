import html from '../lib/core.js'
import { connect } from '../lib/store.js'

function Footer({ todos, filter, filters }) {
    return html`
    <footer class="footer">
        <span class="todo-count">
                <strong>${todos.filter(filters.active).length}</strong> item left
            </span>
        <ul class="filters">
            ${Object.keys(filters).map(typeKey => html`
                <li>
                    <a class="${ typeKey === filter  && 'selected'}" href="#" 
                    onclick="dispatch('switchFilter','${typeKey}')"
                    >
                    ${typeKey[0].toLocaleUpperCase()+typeKey.slice(1)}
                    </a>
                </li>
            `)}
        </ul>
        ${todos.filter(filters.completed).length > 0 && html`
            <button class="clear-completed" onclick="dispatch('clearAllCompleted')">Clear completed</button>
        `}
    </footer>   
    `
}

export default connect()(Footer)