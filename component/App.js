import html from '../lib/core.js'
import Header from './Header.js'
import ToDoList from './ToDoList.js'
import Footer from './Footer.js'
import { connect } from '../lib/store.js'

const connecter = connect()
// console.log("connecter",connect()(App)())

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