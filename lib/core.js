export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, curr) => acc.concat(curr, strings.shift()),
        [first]
    )
        .filter(x => x && x !== true || x === 0)
        .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()

    function render() {
        for (const [root, component] of roots) {
            const output = component() 
            root.innerHTML = output
        }
    }

    return {
        attach(component, root) {
            roots.set(root, component)
            render()
        },

        connect(selector = (state => state)) {
            return (component) => (props, ...args) => {
                console.log('prop',props)
                console.log('args',args)
                return component(Object.assign({}, props, selector(state), ...args))
            }
        },
        // connect (component) { return (props, ...args) =>
        //     component(Object.assign({}, props, state, ...args))
        // },
        // connect(selector = (state => state)) {
        //     return (component) => 
        //             component( selector(state))
        // },
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}
