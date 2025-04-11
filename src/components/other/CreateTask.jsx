import React from 'react'

const CreateTask = () => {
    return (
        <div className='bg-[#1C1C1C]'>

            <h1 className='font-bold text-5xl mx-4 mt-6 mb-2 '>Create Task</h1>

            <form className='w-full p-5'>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Task Title</h1>
                    <input
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="text"
                        placeholder='Make A UI Design'
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Description</h1>
                    <textarea
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm resize-none outline-none'
                        rows='7' placeholder='Detailed Description Of Task (Max 500 words)'
                    ></textarea>
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Date</h1>
                    <input
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="date"
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Assign To</h1>
                    <input
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="text"
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Category</h1>
                    <input
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="text"
                        placeholder='Design, Development, etc...'
                    />
                </div>
                <button className='bg-black w-full py-2 rounded-sm text-xl font-bold'>Create Task</button>
            </form>
        </div>
    )
}

export default CreateTask
