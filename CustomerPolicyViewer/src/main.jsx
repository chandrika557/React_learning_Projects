import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render( //It finds an HTML element with id="root" , 
//  renders React app inside it..render() tells React what to display

  <StrictMode> 
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)