import React, { useState } from 'react'

const Index = () => {

    const [Todo, setTodo] = useState([
        {id: 1, nome: "Alexandre Santana", status: 'true'},
        {id: 2, nome: "Monica Barreto", status: 'true'},
        {id: 1, nome: "Fulado de Souza", status: 'false'}
    ])

    const [todos, setTodos] = useState()

    const handleFormSubmit= e=> {
        e.preventDefault()

        setTodo([
            ...Todo,
            todos,
        ])
    }

    const handleInputChage= e => {
        setTodos({
            ...todos,
            id: Todo.length+1,
            nome: e.target.value,
            status: false
        })
    }


    return(
        <div>
            {
            Todo.map(item => (
                <div key={item.id}>
                    {item.nome} - {item.status}
                </div>
            ))
            }
        
                <br/>
                <hr/>
                <br/>

            <form onSubmit={handleFormSubmit}>
            <input type="text" id="nome" onChange={handleInputChage} placeholder="Digite aqui"/>
            <button>SALVAR</button>
            </form>
        </div>
    )
}

export default Index