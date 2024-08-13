import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
// import AddProduct from './components/AddProduct.jsx'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
// import CreateStore from './components/CreateStore.jsx'
// import ProductArea from './components/ProductArea.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


const ProductArea = lazy(()=> import('./components/ProductArea.jsx'));
const CreateStore = lazy(()=> import('./components/CreateStore.jsx'))
const AddProduct = lazy(()=> import('./components/AddProduct.jsx'))





  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />
    },
    {
      path: '/add-product',
      element: <Suspense> <AddProduct /> </Suspense>
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
      element: <Suspense> <CreateStore /> </Suspense>
    },
    {
      path: '/store/:storeName',
      element: <Suspense> <ProductArea /> </Suspense>
    }

  ])





ReactDOM.createRoot(document.getElementById('root')).render(

 
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
      
  

  
  
 

  
  
)
