import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { Header } from '../components/Header'
function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  const isAdmin = user && JSON.parse(user).admin

  if (!isAdmin && window.location.pathname === '/pedidos') {
    return <Navigate to="/login" />
  }

  return (
    <>
      {user && !isAdmin && <Header />}
      {user ? children : <Navigate to="/login" />}
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node
}
