import React from 'react'

const TaskListNumbers = ({data}) => {
  
  
  return (
    <div className='flex justify-between w-screen flex-wrap px-3 mt-7 '>
      <div className='p-2 flex flex-col justify-center items-start  h-32 w-[48%] bg-[#478AE3] m-1 rounded-xl'>
        <h1 className='text-white font-extrabold text-6xl'>{data.taskStats.newTasks}</h1>
        <h1 className='text-white font-bold text-2xl'>New Task</h1>
      </div>
      <div className='p-2 flex flex-col justify-center items-start  h-32 w-[48%] bg-[#A9C070] m-1 rounded-xl'>
        <h1 className='text-white font-extrabold text-6xl'>{data.taskStats.completedTasks}</h1>
        <h1 className='text-white font-bold text-2xl'>Completed</h1>
      </div>
      <div className='p-2 flex flex-col justify-center items-start  h-32 w-[48%] bg-[#F5CF60] m-1 rounded-xl'>
        <h1 className='text-white font-extrabold text-6xl'>{data.taskStats.activeTasks}</h1>
        <h1 className='text-white font-bold text-2xl'>Accepted</h1>
      </div>
      <div className='p-2 flex flex-col justify-center items-start  h-32 w-[48%] bg-[#C6724D] m-1 rounded-xl'>
        <h1 className='text-white font-extrabold text-6xl'>{data.taskStats.failedTasks}</h1>
        <h1 className='text-white font-bold text-2xl'>Failed</h1>
      </div>

    </div>
  )
}

export default TaskListNumbers