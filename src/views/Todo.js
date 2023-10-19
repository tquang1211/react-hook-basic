const Todo = (props) => {
    console.log('>>> check props: ', props);
    //properties
    //parent => child, top => bottom
    const todos = props.myData;
    return (
        <div className='todos-container'>
            {
                todos.map(todo => {
                    //console.log('>>> check todo list: ', todo);
                    return (
                        <li className='todos-child' key={todo.id}>{todo.title}</li>
                    )
                })
            }
        </div>
    )
}

export default Todo;