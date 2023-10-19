const Todo = (props) => {
    //const Todo = ({ todos, title }) => {
    //console.log('>>> check props: ', props);
    //properties
    //parent => child, top => bottom
    //const todos = props.todos;
    const { todos, title, deleteDataTodo } = props;

    const handleDelete = (id) => {
        deleteDataTodo(id);
    }

    return (
        <div className='todos-container'>
            <div className="title">
                {
                    //props.title
                    title
                }
            </div>
            {
                todos.map(todo => {
                    //console.log('>>> check todo list: ', todo);
                    return (
                        <div key={todo.id}>
                            <li className='todos-child'>{todo.title} &nbsp;
                                <span onClick={() => handleDelete(todo.id)}>x</span>
                            </li>
                        </div>
                    )
                })
            }

            <hr />

        </div>
    )
}

export default Todo;