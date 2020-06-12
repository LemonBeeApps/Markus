import FilterLink from 'components/FilterLink'
import React from 'react'
import { VisibilityFilters } from 'store'

const Footer = () => (
  <footer className="todo-footer">
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </footer>
)

export default Footer
