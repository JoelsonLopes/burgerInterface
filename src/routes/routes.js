import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private.route'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/produtos"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />

        <Route
          path="/carrinho"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.Order}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.Products}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.NewProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path={paths.EditProduct}
          element={
            <PrivateRoute isAdmin>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
