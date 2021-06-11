import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/context'

const AddTodo = () => {
    const {saveTodo} = useContext(TodosContext)

    const[todo, setTodo] = useState()

    const handleFormSubmit= e=> {
        e.preventDefault()

       saveTodo(todo)
    }

    const handleInputChage= e => {
        setTodo({
            ...todo,
            nome: e.target.value,
        })
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" id="nome" onChange={handleInputChage} placeholder="Digite aqui"/>
            <button>SALVAR</button>
        </form>
    )
}

export default AddTodo