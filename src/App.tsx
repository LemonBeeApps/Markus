import 'styles/index.scss'

import Container from 'components/Container'
import { Provider } from 'mobx-react'
import React from 'react'
import Store from 'store'

const store = new Store()

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
)

export default App
