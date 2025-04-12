import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider.jsx'



const App = () => {


  const [user, setuser] = useState('')

  const authData = useContext(AuthContext)


  useEffect(() => {
    
    if(authData){
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsed = JSON.parse(storedUser); // THIS is the key fix
        setuser(parsed.role);
      }
      
    }}
  , []);
  
  

  const handleLogin = (email,password) =>{
    if(authData && authData.admin.find(e => e.email === email && e.password === password)){
      setuser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
      
      
    }
    else if (authData && authData.employees.find(e=>e.email === email && e.password === password)){
      setuser('employee')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
      
    }
    else{
      alert('Invalid Credentials')

    }
  }


 const handleLogout = ()=>{
  localStorage.removeItem('loggedInUser')
  setuser('')
 }
  
  

  return (
    <div>
      <>
      {!user ? <Login handleLogin={handleLogin}/> : ''}
      {user === 'employee' && <EmployeeDashboard handleLogout={handleLogout}/> }
      {user === 'admin' && <AdminDashboard handleLogout={handleLogout}/>}

      
      </>
    </div>
  )
}

export default App
