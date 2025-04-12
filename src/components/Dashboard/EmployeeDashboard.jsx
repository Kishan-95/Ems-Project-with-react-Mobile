import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({handleLogout,data}) => {
  return (
    <div className='bg-[#1C1C1C] w-screen h-screen '>
      <Header handleLogout={handleLogout} data={data}/>
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard
