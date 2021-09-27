import html from '../js/core.js'
import ToDoItem from './ToDoItem.js'
import { connect } from '../js/store.js'

const connecter = connect()

//dòng trên </section>: InHand Object Literals ( viết tắt { todo: todo })
//tạo một Obj có Key là todoKey: và value là cái giá trị "todo" được todos.map

//Destructuring gán lại tên cho key todos lấy từ connect -> state của reducer
function ToDoList({ todos: todoChange }) {
    // todoChange.forEach(todo => {
    //     console.log({todo3: todo})
    // })

    return html `
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todoChange.map((todo, index) => ToDoItem({todoKey: todo, index}))}
        </section>
    `
}

export default connect()(ToDoList)