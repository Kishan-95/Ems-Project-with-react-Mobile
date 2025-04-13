import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm()

      const [taskData, settaskData] = useState([])

      

      const { employees, updateEmployees } = useContext(AuthContext);

      const onSubmit = (data) => {
        const newTask = {
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          taskTitle: data.title,
          taskDescription: data.description,
          taskDate: data.date,
          category: data.category,
        };
      
        const updatedEmployees = employees.map((emp) => {
          if (emp.firstName === data.assignTo) {
            return {
              ...emp,
              tasks: [...emp.tasks, newTask],
              taskStats: {
                ...emp.taskStats,
                totalTasks: emp.taskStats.totalTasks + 1,
                newTasks: emp.taskStats.newTasks + 1,
              }
            };
          }
          return emp;
        });
      
        updateEmployees(updatedEmployees);
        reset();
      };


    


    return (
        <div className='bg-[#1C1C1C]'>

            <h1 className='font-bold text-5xl mx-4 mt-6 mb-2 '>Create Task</h1>

            <form onSubmit={handleSubmit(onSubmit)}  className='w-full p-5'>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Task Title</h1>
                    <input
                        {...register("title")}
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="text"
                        placeholder='Make A UI Design'
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Description</h1>
                    <textarea
                        {...register("description")}
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm resize-none outline-none'
                        rows='7' placeholder='Detailed Description Of Task (Max 500 words)'
                    ></textarea>
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Date</h1>
                    <input
                    {...register("date")}
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="date"
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Assign To</h1>
                    <input
                    {...register("assignTo")}
                        className='bg-[#313131] w-full py-1 px-2 rounded-sm outline-none'
                        type="text"
                    />
                </div>
                <div className='mb-4'>
                    <h1 className='text-lg mb-1 text-gray-300'>Category</h1>
                    <input
                    {...register("category")}
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
