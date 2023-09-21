import { AuthContext } from './AuthContext'
import React, { useReducer } from "react"; 


// Definir tipos para las acciones
const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
};

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login: 
            return {
                ...state,
                logged: true, 
            };
        case types.logout: 
            return {
                ...state,
                logged: false, 
            };
        default:
            return state;
    }
};

const AuthProvider = ({children}) => {

    const init = () => {
        const token = localStorage.getItem("token");
        return {
            logged: !!token,
        };
    };
    
    //funciona
    const [state, dispatch] = useReducer(authReducer, {}, init); 
    console.log(state)

    const login = () => {
        const action = {
            type: types.login, 
        };
        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem("token"); 
        const action = {
            type: types.logout, 
        };
        dispatch(action);
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            login, logout
        }}>
            {children}
        </AuthContext.Provider>

    );
};


export default AuthProvider;
