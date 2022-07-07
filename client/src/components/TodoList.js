import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import styles from "./TodoAddItem.module.css";
import * as listManager from "../services/listManageServices"

export const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [status, setStatus] = useState('');

    useEffect(() => {
        listManager.getAll()
            .then(result => setTodos(Object.values(result)));
    }, []);

    const addTodoHandler = (e) => {
        e.preventDefault();

        let statusCompletion = false;

        if (status === 'Complete') {
            statusCompletion = true;
        }

        listManager.uploadTask(task, statusCompletion)
            .then(result => {
                setTodos(todos => [...todos, result])
            });

        setTask('');
        setStatus('');
    };

    const todoRemover = (todo) => {
        listManager.deleteTask(todo)
            .then(deletedTask => {
                setTodos(todos => todos.filter(x => x._id !== deletedTask._id))
            });
    };

    const todoColorChange = (todo) => {
        listManager.updateTask(todo)
            .then(modifiedTodo => {
                setTodos(oldTodos => oldTodos.map(x => x._id == modifiedTodo._id ? modifiedTodo : x));
            });
    };

    const handlers = {
        'todoColorChange': todoColorChange,
        'todoRemover': todoRemover,
    };

    return (
        <div>

            <form onSubmit={addTodoHandler}>

                <label htmlFor="taksToAdd" className={styles['todo-add-text']} >Name of the task:
                    <input type="text" value={task} className={styles['todo-add-input']} onChange={(e) => setTask(e.target.value)} />
                </label>

                <label htmlFor="currentStatus" className={styles['todo-add-text']} >Status of the task:
                    <input type="text" value={status} className={styles['todo-add-input']} onChange={(e) => setStatus(e.target.value)} placeholder='Complete or Incomplete' />
                </label>

                <input type="submit" className={styles['todo-add-submit']} value="Submit" />
            </form>

            <table className="table">


                <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {todos.length
                        ? todos.map(x => <TodoItem key={x._id} {...x} onClick={handlers} />)
                        : <tr>
                            <td>
                                There are no tasks
                            </td>
                        </tr>}

                </tbody>
            </table>
        </div>
    );
}