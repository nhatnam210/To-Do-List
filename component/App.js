import html from '../js/core.js'
import Header from '../component/Header.js'
import ToDoList from '../component/ToDoList.js'
import Footer from '../component/Footer.js'
import { connect } from '../js/store.js'

const connecter = connect()

function App({ todos }) {
    return  html`
        <section class="todoapp">
            ${Header()}
            ${todos.length > 0 && ToDoList()}
            ${todos.length > 0 && Footer()}
        </section>
    `
}

export default connecter(App)