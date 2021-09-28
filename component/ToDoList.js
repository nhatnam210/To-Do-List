import html from '../js/core.js'
import ToDoItem from './ToDoItem.js'
import { connect } from '../js/store.js'

// const connecter = connect()

//dòng trên </section>: InHand Object Literals ( viết tắt { todo: todo })
//tạo một Obj có Key là todoKey: và value là cái giá trị "todo" được todos.map

//Destructuring gán lại tên cho key todos lấy từ connect -> state của reducer
function ToDoList({ todos: todosChange, filter, filters, editIndex }) {
    // console.log(filters)
    return html `
        <section class="main">
            <input id="toggle-all" 
            class="toggle-all" 
            type="checkbox"
            onchange="dispatch('toggleAll',this.checked)"
            ${todosChange.every(filters.completed) && 'checked'}
            >
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                ${todosChange
                    .filter(filters[filter])
                    .map((todo, index) => 
                        ToDoItem({todoKey: todo, index, editIndex})
                    )}
        </section>
    `
}

//connect() được chạy cần truyền vào một component để tạo ra hàm mới,
//hàm mới này khi chạy thì component sẽ được thực thi và return ra được cái giá trị của component
export default connect()(ToDoList)