import React from 'react'
import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/Context'

export default function PrivateRoute(props) {
    const {children} = props
    const {getUser} = useContext(AuthContext)
    const location = useLocation();

    if (getUser) {
        return children
    }

  return <Navigate state={location.pathname} to='/login'></Navigate>
}
