

const Footer = ({filteredTodos, clearTodos, setActiveTab}) => {
  
    const todosLength = filteredTodos.length;

    const handleFilter = (e) => {
        if (e.target.className === "Completed"){
            setActiveTab("Completed")
        } else if (e.target.className === "Active"){
            setActiveTab("Active")
        } else if (e.target.className === "All"){
            setActiveTab("All")
        }
    }

    return (
    <>
        <footer className="footer">

        <span className="todo-count">
            <strong>{todosLength} items left</strong>
            
        </span>
        <ul className="filters" onClick={handleFilter}>
            <li >
                <a className="All">All</a>
            </li>
            <li >
                <a className="Active">Active</a>
            </li>
            <li>
                <a className="Completed">Completed</a>
            </li>
        </ul>

        <button className="clear-completed" onClick={clearTodos}>
            Clear completed
        </button>
        <footer className="info">
            <p>Click to edit a todo</p>
        </footer>
    </footer>
    </>
  )
}

export default Footer