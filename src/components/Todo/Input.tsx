import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import Store from 'store'
import { observable } from 'mobx'

interface InjectProps {
  store: Store
}

@inject('store')
@observer
class TodoInput extends Component {
  @observable value: string = ''

  get injectedStore() {
    return (this.props as InjectProps).store
  }

  handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.injectedStore.addTodo(this.value)
      this.value = ''
    }
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.value = e.target.value
  }

  render() {
    return (
      <section className="todo-input">
        <input
          className="new"
          type="text"
          placeholder="I will do ..."
          value={this.value}
          onKeyPress={this.handleAddTodo}
          onChange={this.handleInputChange}
        />
      </section>
    )
  }
}

export default TodoInput
