import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()




const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState({employees: [] , admin: []})

    useEffect(() => {
        const {employees,admin} = getLocalStorage()
        setuserData({employees,admin})
    
    
    
    }, [])
    


  return (
    <AuthContext.Provider value={userData}>
        {children}
    </AuthContext.Provider>

    
    
  )
}

export default AuthProvider
