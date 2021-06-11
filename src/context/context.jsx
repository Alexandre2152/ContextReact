import React, { createContext, useState } from 'react'

export const TodosContext = createContext()


const TodoProvider = ({children}) =>{

    const [Todo, setTodo] = useState([
        {id: 1, nome: "Alexandre Santana", status: 'true'},
        {id: 2, nome: "Monica Barreto", status: 'true'},
        {id: 1, nome: "Fulado de Souza", status: 'false'}
    ])

    const saveTodo = todo => {
        const newTodo = {
            id: Todo.length + 1,
            nome: todo.nome
        }
        setTodo([...Todo, newTodo])
    }

    return(
        <TodosContext.Provider value={{Todo, saveTodo}}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodoProvider