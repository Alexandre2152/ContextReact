import React, { useContext } from 'react'
import { TodosContext } from '../context/context'

import TodoItem from '../components/TodoItem'

const TodoList = () =>{
    const context = useContext(TodosContext)

    const data = context.Todo.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
    ))
    return(
        <div>{data}</div>
    )
}

export default TodoList