export const TodoItem = (props) => {
    let className = 'todo';

    if (props.isComplete) {
        className += ' is-completed';
    }

    return (
        <tr className={className}>
            <td>{props.title}</td>
            <td>{props.isComplete ? 'Complete' : 'Incomplete'}</td>
            <td className="todo-action">
                <button onClick={() => props.onClick.todoColorChange(props)}>Change status</button>
                <button onClick={() => props.onClick.todoRemover(props)}>Delete</button>
            </td>
        </tr>
    );
}