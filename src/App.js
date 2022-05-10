import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

function App() {

  const [todos, setTodos] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  const filteredTodos = 
        activeTab === "All"
        ? todos
        : activeTab === "Active"
        ? todos.filter((todo) => todo.isComplated !==true)
        : todos.filter((todo) => todo.isComplated !==false)

  const clearTodos = () => {
    setTodos([])
    setActiveTab("All")
  }      
  return (
    <section className="todoapp">
      <Header addTodo = {setTodos} todos = {todos} />

      <section className="main">
		    <input className="toggle-all" type="checkbox"/>
        <label hmtlfor="toggle-all">
          Mark all as complete
        </label>
          <List todos = {todos} setTodos = {setTodos} filteredTodos = {filteredTodos} activeTab = {activeTab} 
          setActiveTab = {setActiveTab} clearTodos = {clearTodos}/>
          <Footer filteredTodos = {filteredTodos} activeTab = {activeTab} 
          setActiveTab = {setActiveTab} clearTodos = {clearTodos}/>
      </section>
    </section>
  );
}

export default App;
