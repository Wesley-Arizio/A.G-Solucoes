import React, { createContext, useContext, useEffect, useReducer } from 'react';

import history from '../history';

import api from '../services/api';

export interface User {
    name: string,
    email: string,
    password: string
}

export interface AuthContext {
    authenticated: boolean,
    user: User,
    loading: boolean
}

type Action = { type: 'login' | 'logout' | 'setLoading' }

type Dispatch = (action: Action) => void

const AuthStateContext = createContext<AuthContext | undefined>(undefined);
const AuthDispatchContext = createContext<Dispatch | undefined>(undefined);

function handleReducer(state: AuthContext, action: Action ){
    switch (action.type) {
        case 'login': {
            const isAuthenticated = { ...state };
            isAuthenticated.authenticated = true;
            return isAuthenticated;
        }

        case 'logout': {
            localStorage.removeItem('token');
            api.defaults.headers.Authorization = undefined;

            const isAuthenticated = { ...state };
            isAuthenticated.authenticated = false;

            history.push('/');

            return isAuthenticated;
        }

        case 'setLoading': {
            const isLoading = { ...state };
            isLoading.loading = false;
            return isLoading;
        }

        default: {
            throw new Error('Unhandled function');
        }
    }
}

export function AuthContextProvider({ children }: any){
    const [state, dispatch] = useReducer(handleReducer, {
        authenticated: false,
        user: {
            name: "",
            email: "",
            password:"" 
        },
        loading: true
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            dispatch({type: 'login'});
        }

        dispatch({type: 'setLoading'});
    }, [])

    return (
        <AuthStateContext.Provider value={state}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    );
}

export function useAuthContext() {
    const context = useContext(AuthStateContext);

    if(context === undefined) {
        throw new Error('useAuthContext must be used within a AuthContextProvider');
    }

    return context;
}

export function useDispatchContext() {
    const context = useContext(AuthDispatchContext);

    if(context === undefined) {
        throw new Error('AuthDispatchContext must be used within a AuthContextProvider');
    }
    
    return context;
}