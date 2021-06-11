import React from 'react'

import ContextTodo from '../context/context'
import TodoList from '../components/TodoList'
import TodoAdd from '../components/Add'


const Todo = () => {
    return(
        <div>
            <ContextTodo>
                <TodoList></TodoList>
                <br/>
                <hr/>
                <br/>
            <TodoAdd/>
            </ContextTodo>
        </div>
    )
}

export default Todo