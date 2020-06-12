import Store, { Todo } from 'store'

import React from 'react'
import TodoItem from 'components/Todo/Item'
import { observer } from 'mobx-react'

interface TodoListProps {
  store: Store
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ store, todos }) => (
  <ul className="todo-list">
    {// tslint:disable-next-line: jsx-no-multiline-js
    todos.map(todo => (
      <TodoItem key={todo.id} store={store} todo={todo} />
    ))}
  </ul>
)

export default observer(TodoList)
