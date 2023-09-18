import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import {PATH_LOGIN} from '../routers/routerPaths'

export const PrivateRouter = ({ children }) => {
    const {logged} = useContext(AuthContext)
    console.log({logged});
    return (logged) ?
        children
        : <Navigate to={PATH_LOGIN} />
}
