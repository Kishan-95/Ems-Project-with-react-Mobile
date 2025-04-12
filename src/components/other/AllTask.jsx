import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const data = useContext(AuthContext)
  console.log(data.employees[0].tasks[0].taskTitle)


  return (

    
    <div className='bg-[#1C1C1C] w-full h-80 mt-16 overflow-auto'>

    {data.employees.map((employee,idx)=>(
      employee.tasks.map((task,task_idx)=>(
        <div
  key={`${idx}-${task_idx}`}
  className='flex justify-between items-center p-4 font-bold text-lg m-4 rounded text-white'
  style={{
    backgroundColor:
      task.completed
        ? '#22c55e'
        : task.failed
        ? '#ef4444'
        : task.active
        ? '#facc15'
        : task.newTask
        ? '#3b82f6'
        : '#6b7280'
  }}
>
  <h1 className='text-sm'>{employee.firstName}</h1>
  <h1 className='text-sm'>{task.taskTitle}</h1>
  <h1 className='text-sm'>{task.category}</h1>
</div>
      ))
     
    ))}

    

    
      
    </div>
  
  )
}

export default AllTask
