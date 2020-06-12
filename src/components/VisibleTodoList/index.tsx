import React from 'react'
import Store from 'store'
import TodoList from 'components/Todo/List'
import { observer } from 'mobx-react'
import { useStores } from 'hooks/mobx'

const VisibleTodoList = () => {
  const { store } = useStores<{ store: Store }>()

  return <TodoList store={store} todos={store.visibleTodos} />
}

export default observer(VisibleTodoList)
