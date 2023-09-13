import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
  const user = localStorage.getItem('codeburger:userData')

  return user ? children : <Navigate to="/" />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node // Validação para a propriedade children
}
