import React from 'react'

const List = ({todos, setTodos ,filteredTodos, setFilteredTodos }) => {

    const onCheckHandler = (e) => {
        const itemKey = e.target.value;
        const tempState = [...todos]
        const tempElement = {...tempState[itemKey]}
        
        tempElement.isComplated = !tempElement.isComplated
        tempState[itemKey] = tempElement
        setTodos(tempState)     
        }

    const deleteTodo = (e) => {
        const todoID = e.target.value
        setTodos(todos.filter((todo) => todo.id !== todoID))

    }
        
    return (
      
    <ul className="todo-list">
    {filteredTodos.map((todo, key) => (
        <li className={todo.isComplated ? "completed" : "view"} key={key}>
            <input className="toggle"
            defaultChecked={todo.isCompleted} 
            type="checkbox" 
            value= {key}
            onChange={(e) => onCheckHandler(e)}
            />
            <label>{todo.value}</label>
            <button className="destroy" value={todo.id} onClick={(e) => deleteTodo(e)}></button>
        </li>
    ))}  
    </ul>
  )
}

export default List