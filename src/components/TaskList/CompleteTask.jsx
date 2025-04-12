import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='w-9/10 m-4 bg-[#A9C070] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold rounded-xl '>{data.category}</h1>
                    <h1 className='text-sm text-white '>{data.taskDate}</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>{data.taskTitle}</h1>
                    <h1>{data.taskDescription}</h1>

                </div>
                <div className='m-4'>
                    <button className='w-full p-3 text-base rounded-2xl font-bold text-white bg-green-400'>Complete</button>
                </div>
            </div>
  )
}

export default CompleteTask
