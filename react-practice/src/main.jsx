import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { store } from './Component/Store.jsx'
import { Provider } from 'react-redux'
import { store1 } from './Component/redux-toolkit/store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store1}>
      <App />
    </Provider>    
  </StrictMode>,
)
