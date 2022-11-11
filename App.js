import React from 'react'
import Route from './src/Navigation/Route'
import { Provider } from 'react-redux'
import store from './src/redux/store'


 function App() {
  return (
    <Provider store={store}>
    <Route/>
    </Provider>
  )
}
export default App;
