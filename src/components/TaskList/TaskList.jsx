import React from 'react'

const TaskList = () => {
    return (
        <>

        <h1 className='text-4xl font-bold text-white px-4 py-6'>Tasks</h1>
        <div className='w-screen h-128 scrollbar-hide overflow-auto bg-[#1C1C1C] flex flex-col  items-center'>
            
            <div className='h-64 w-9/10 m-4 bg-[#C6724D] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold '>High</h1>
                    <h1 className='text-sm text-white '>20 Feb 2024</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>Example Task</h1>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatum, soluta vero autem ex repellendus quae!</h1>

                </div>
            </div>

            <div className='h-64 w-9/10 m-4 bg-[#C6724D] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold '>High</h1>
                    <h1 className='text-sm text-white '>20 Feb 2024</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>Example Task</h1>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatum, soluta vero autem ex repellendus quae!</h1>

                </div>
            </div>

            <div className='h-64 w-9/10 m-4 bg-[#C6724D] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold '>High</h1>
                    <h1 className='text-sm text-white '>20 Feb 2024</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>Example Task</h1>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatum, soluta vero autem ex repellendus quae!</h1>

                </div>
            </div>

            <div className='h-64 w-9/10 m-4 bg-[#C6724D] rounded-3xl' >
                <div className='flex justify-between items-center p-4'>
                    <h1 className='bg-red-400 p-1 text-sm text-white font-bold '>High</h1>
                    <h1 className='text-sm text-white '>20 Feb 2024</h1>
                </div>
                <div className='text-white p-4'>
                    <h1 className='mb-3 text-xl font-bold'>Example Task</h1>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi voluptatum, soluta vero autem ex repellendus quae!</h1>

                </div>
            </div>

        </div>
        </>
    )
}

export default TaskList
