import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AddProduct from './components/AddProduct.jsx'
import ModelContextProvider from './contexts/ModalContext.jsx'
import CartContextProvider from './contexts/CartContext.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import CreateStore from './components/CreateStore.jsx'
import ProductArea from './components/ProductArea.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'





  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/add-product',
      element: <AddProduct />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/create-account',
      element: <SignUp />
    },
    {
      path: '/create-store',
      element: <CreateStore />
    },
    {
      path: '/store/:storeName',
      element: <ProductArea />
    }

  ])





ReactDOM.createRoot(document.getElementById('root')).render(

 
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
      
  

  
  
 

  
  
)
