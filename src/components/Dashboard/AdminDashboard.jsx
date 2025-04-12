import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({handleLogout,data}) => {
    return (
        <div className='bg-[#1C1C1C] h-screen w-full text-white'>

            <Header handleLogout={handleLogout}/>
            <CreateTask data={data}/>
            <AllTask data={data}/>

            
        </div>
    )
}

export default AdminDashboard