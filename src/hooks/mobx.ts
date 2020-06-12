import { MobXProviderContext } from 'mobx-react'
import React from 'react'

export function useStores<T>() {
  return React.useContext<T>(MobXProviderContext)
}
