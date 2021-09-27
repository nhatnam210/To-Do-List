const init = {
    todos : [
        {
            title : 'Learn Javascript',
            completed: false,
        },
        {
            title : 'Learn HTML, CSS',
            completed: true,
        },
        {
            title : 'NodeJS',
            completed: false,
        },
    ]
}

export default function reducer(state = init, action, args) {
    switch(action) {
        default:
            return state;
    }
}