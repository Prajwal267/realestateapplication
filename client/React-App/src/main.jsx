import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/PropertyContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>4
    <ShopContextProvider>

    <App/>

    </ShopContextProvider>
    
   
  </React.StrictMode>,
)
