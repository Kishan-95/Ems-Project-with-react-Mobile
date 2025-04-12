import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className=' w-9/10 m-4 bg-[#478AE3] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold rounded-xl'>{data.category}</h1>
                    <h1 className='text-sm text-white '>{data.taskDate}</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>{data.taskTitle}</h1>
                    <h1>{data.taskDescription}</h1>

                </div>
                <div className='m-4'>
                <button className='rounded-xl p-4 bg-green-400 text-sm font-bold text-white'>Accept Task</button>
                </div>
               
            </div>
  )
}

export default NewTask
