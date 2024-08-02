import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ModelContextProvider from './contexts/ModalContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <ModelContextProvider>
      <App />
    </ModelContextProvider>
  </CartContextProvider>
  ,
)
