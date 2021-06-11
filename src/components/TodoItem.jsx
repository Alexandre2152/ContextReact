import React from 'react'

const TodoItem = ({todo}) => {
    return(
        <div>
            {todo.id} - {todo.nome}
        </div>
    )
}

export default TodoItem