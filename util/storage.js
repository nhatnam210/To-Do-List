const TODOS_LIST_KEY = "TODOS-KEY"

export default {
    get() {
        return JSON.parse(localStorage.getItem(TODOS_LIST_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODOS_LIST_KEY, JSON.stringify(todos))
    }
}