import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { register } from 'swiper/element/bundle'

import { UserProvider } from './hooks/UserContext'
import MyRoutes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'
register()

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <UserProvider>
      <MyRoutes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </React.StrictMode>
)
