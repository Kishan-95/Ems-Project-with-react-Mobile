import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className=' w-9/10 m-4 bg-[#C6724D] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold rounded-xl'>{data.category}</h1>
                    <h1 className='text-sm text-white '>{data.Date}</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>{data.taskTitle}</h1>
                    <h1>{data.taskDescription}</h1>

                </div>
                <div className='m-4'>
                    <button className='p-3 rounded-2xl w-full font-bold text-base text-white bg-red-400'>Failed</button>
                </div>
            </div>
  )
}

export default CompleteTask
