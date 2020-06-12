import Footer from 'components/Footer'
import React from 'react'
import TodoInput from 'components/Todo/Input'
import VisibleTodoList from 'components/VisibleTodoList'

const Container = () => (
  <div className="todo-container">
    <header className="todo-header">
      <h1>TODOS</h1>
    </header>
    <TodoInput />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default Container
