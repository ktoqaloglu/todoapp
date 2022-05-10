import React, {useState, useEffect} from 'react'

const initialFormValues = {id: "", value: "", isComplated: false}

const Header = ({addTodo, todos }) => {

    const [form, setForm] = useState(initialFormValues)

    const onChangeInput = (e) => {
        
        setForm({...form, value: e.target.value, id: Math.random().toString(36).substr(2, 9)})

    }



    const onSubmit = (e) => {
        e.preventDefault()
        if (form.value === "") {
            return false;
        }
        addTodo([...todos, form])
        setForm(initialFormValues)
    }
  return (
<header className="header">
		<h1>todos</h1>
		<form onSubmit={onSubmit}>
			<input name="value" value={form.value} className="new-todo" placeholder="What needs to be done?" onChange={onChangeInput} autoFocus />
		</form>
	</header>
  )
}

export default Header