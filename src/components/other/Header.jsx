import React, { useEffect } from 'react'
import { useState } from 'react'

const Header = ({handleLogout,data}) => {
  
  const [username, setusername] = useState('')
  
  useEffect(() => {
    if(data?.firstName){
      setusername(data.firstName)
    }
    else{
      setusername('Admin')
    }
  
    
  }, [data])
  

  return (

    <div className='text-white  flex justify-between items-center px-4 pt-7 '>
       <div>
       <h1 className='font-bold text-2xl'>Hello,</h1>
       <h1 className='font-extrabold text-3xl '>{username} 👋</h1>
       </div>
        
        <button onClick={handleLogout} className='text-white bg-[#BD4F3E] px-3 py-1 rounded-xl font-bold '>Log Out</button>
    </div>
  )
}

export default Header