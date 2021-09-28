import storage from "../util/storage.js"

const init = {
    todos : storage.get(),
    filter: 'all',
    filters : {
        //filter(item => xử lý logic true/false)
        // nên khi filter.all, filter.active,... được gọi thì sẽ đưa nguyên cụm arrow function này vào cái nơi cần lọc
        all: () => true,
        active: todo => !todo.completed,
        completed: (todo) => todo.completed, // đã hiểu
    }
}

const actions = {
    add({ todos }, title) {
        if(title) {
            todos.push({
                title,
                completed: false,
            })
            storage.set(todos)
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo=> todo.completed = completed)
        storage.set(todos)
    },
    destroy({ todos }, index) {
        todos.splice(index,1)
        storage.set(todos)
    },
    switchFilter(state, filter) {
        state.filter = filter
    },
    clearAllCompleted(state) {
        //state.filters['active'] chính là cái arrow func bên trên
        // <=> state.todos = state.todos.filter(todo => !todo.completed)
        state.todos = state.todos.filter(state.filters['active'])
        storage.set(state.todos)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args)
    return state
}