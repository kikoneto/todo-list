export const getAll = () => {
    return fetch('http://localhost:3030/jsonstore/todos')
        .then(res => res.json());
};

export const uploadTask = (task, statusCompletion) => {
    return fetch('http://localhost:3030/jsonstore/todos', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ title: task, isComplete: statusCompletion })
    })
        .then(res => res.json());
};

export const deleteTask = (todo) => {
    return fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({})
    })
        .then(res => res.json());
};

export const updateTask = (todo) => {
    return fetch(`http://localhost:3030/jsonstore/todos/${todo._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ ...todo, isComplete: !todo.isComplete })
    })
        .then(res => res.json());
};