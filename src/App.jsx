import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider.jsx'



const App = () => {

  

  const [user, setuser] = useState('')
  const [loggedInUserData, setloggedInUserData] = useState('')

  const authData = useContext(AuthContext)


  useEffect(() => {
    
    if(authData){
      const storedUser = localStorage.getItem("loggedInUser");
      if (storedUser) {
        const parsed = JSON.parse(storedUser); // THIS is the key fix
        setuser(parsed.role);
        setloggedInUserData(parsed)
      }
      
    }}
  , []);
  
  

  const handleLogin = (email,password) =>{
    if(authData){
    const admin = authData && authData.admin.find(e => e.email === email && e.password === password)

    if(admin){
      setuser('admin')
      setloggedInUserData(admin)
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin',...admin}))
      return;
      
    }

    const employee = authData && authData.employees.find(e=>e.email === email && e.password === password)
    if (employee){
      setuser('employee')
      setloggedInUserData(employee)
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',...employee}))
      return;
    }
    
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
      {user === 'employee' && <EmployeeDashboard handleLogout={handleLogout} data={loggedInUserData}/> }
      {user === 'admin' && <AdminDashboard handleLogout={handleLogout} data={loggedInUserData}/>}

      
      </>
    </div>
  )
}

export default App
