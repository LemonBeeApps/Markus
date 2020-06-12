import React, { Component } from 'react'
import Store, { Todo } from 'store'

import { observer } from 'mobx-react'

interface TodoItemProps {
  store: Store
  todo: Todo
}

@observer
class TodoItem extends Component<TodoItemProps> {
  handleToggleTodo = () => this.props.todo.toggle()

  handleDeleteTodo = (id: number) => () => this.props.store.deleteTodo(id)

  render() {
    const { id, text, completed } = this.props.todo

    return (
      <li>
        <input checked={completed} type="checkbox" onChange={this.handleToggleTodo} />
        <label className={completed ? 'todo-label-completed' : ''}>{text}</label>
        <span onClick={this.handleDeleteTodo(id)}>✘</span>
      </li>
    )
  }
}

export default TodoItem
