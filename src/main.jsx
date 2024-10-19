import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import { store } from './Redux/States/store.js'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import UserDataProvider from './ContextProvider/UserDataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserDataProvider>
        <RouterProvider router={router} />
      </UserDataProvider>
    </Provider>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </React.StrictMode>,
)
