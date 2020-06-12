import Store, { VisibilityFilters } from 'store'

import Link from 'components/Link'
import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from 'hooks/mobx'

interface FilterLinkProps {
  children: React.ReactChild
  filter: VisibilityFilters
}

const FilterLink: React.FC<FilterLinkProps> = ({ filter, children }) => {
  const { store } = useStores<{ store: Store }>()

  return (
    <Link active={store.filter === filter} onClick={store.setVisibilityFilter(filter)}>
      {children}
    </Link>
  )
}

export default observer(FilterLink)
