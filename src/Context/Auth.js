import React, { createContext, useContext, useState, useEffect } from 'react'
const Context = createContext()

const LoginProvider = ({children})=>{

    const [token, setToken] = useState(window.localStorage.getItem('token'))
    
    useEffect(()=>{
        if(!localStorage.getItem('token') && token){
            window.localStorage.setItem('token', token)
        }
    },[token])

    const value = {
        token,
        setToken
    }
    
    return (
        <Context.Provider value={value}>
            <Context.Consumer>
                {
                    ()=> children
                }
            </Context.Consumer>
        </Context.Provider>
    )
}

const useLogin = (setterOnly) =>{
    const { token, setToken } = useContext(Context)
    return setterOnly ? [setToken] : [token,setToken]
}

export {
    LoginProvider,
    useLogin
}