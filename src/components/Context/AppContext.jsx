import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export const AppContext = createContext()

const AppContextProvider = (props)=>{
    const [user, setUser] = useState(null);
    const [ShowLogin, setShowLogin] = useState(false);
    const value = {user, setUser,ShowLogin,setShowLogin}
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider