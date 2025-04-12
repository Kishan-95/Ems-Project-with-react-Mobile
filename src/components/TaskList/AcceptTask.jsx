import React from 'react'

const AcceptTask = ({data}) => {
    
  return (
    <div className='w-9/10 m-4 bg-[#F5CF60] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold rounded-xl'>{data.category}</h1>
                    <h1 className='text-sm text-white '>{data.taskDate}</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>{data.taskTitle}</h1>
                    <h1>{data.taskDescription}</h1>

                </div>
                <div className='flex justify-between mt-5 p-4'>
                    <button className='bg-green-400 p-4 text-sm rounded-xl text-white font-bold'>Mark as Completed</button>
                    <button className='bg-red-400 p-4 text-sm text-white font-bold rounded-xl'>Mark as Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask
