import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
    return (
        <div className='bg-[#1C1C1C] h-screen w-full text-white'>

            <Header />
            <CreateTask/>
            <AllTask/>

            
        </div>
    )
}

export default AdminDashboard