import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

export const PublicRouter = ({ children }) => {
    const { logged } = useContext(AuthContext)
    console.log('logeado', logged)
    return (logged) ?
        children
        : null
}