import { action, computed, observable } from 'mobx'

let nextTodoId = 0

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
  SHOW_COMPLETED = 'SHOW_COMPLETED'
}

function getVisibleTodos(todos: Todo[], filter: VisibilityFilters) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

type TodoId = number
type TodoText = string

export class Todo {
  id: TodoId
  @observable text: TodoText
  @observable completed: boolean

  constructor(id: TodoId, text: TodoText, completed: boolean) {
    this.id = id
    this.text = text
    this.completed = completed
  }

  @action
  toggle() {
    this.completed = !this.completed
  }
}

// tslint:disable-next-line: max-classes-per-file
export default class Store {
  @observable todos: Todo[] = []
  @observable filter: VisibilityFilters = VisibilityFilters.SHOW_ALL

  @action
  addTodo = (text: string) => {
    this.todos.push(new Todo(nextTodoId++, text, false))
  }

  @action
  deleteTodo = (id: number) => {
    this.todos = this.todos.filter((todo: Todo) => todo.id !== id)
  }

  @computed
  get visibleTodos() {
    return getVisibleTodos(this.todos, this.filter)
  }

  @action
  setVisibilityFilter = (filter: VisibilityFilters) => () => (this.filter = filter)
}
