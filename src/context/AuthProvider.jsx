import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()




const AuthProvider = ({children}) => {

    const [userData, setuserData] = useState({employees: [] , admin: []})

    useEffect(() => {
        const {employees,admin} = getLocalStorage()
        setuserData({employees,admin})
        setLocalStorage()
    
    
    
    }, [])

    const updateEmployees = (updatedEmployees) => {
      setuserData((prev) => {
        const newData = { ...prev, employees: updatedEmployees };
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        return newData;
      });
    };
  
  
    


  return (
    <AuthContext.Provider value={{...userData,updateEmployees}}>
        {children}
    </AuthContext.Provider>

    
    
  )
}

export default AuthProvider
