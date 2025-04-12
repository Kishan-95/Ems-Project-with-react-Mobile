import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    
    return (
        <>

        <h1 className='text-4xl font-bold text-white px-4 py-6'>Tasks</h1>
        <div className='w-screen h-128 scrollbar-hide overflow-auto bg-[#1C1C1C] flex flex-col  items-center'>
            
        
        {data.tasks.map((elem, idx) => (
          <React.Fragment key={idx}>
            {elem.newTask && <NewTask data={elem} />}
            {elem.active && <AcceptTask data={elem} />}
            {elem.completed && <CompleteTask data={elem} />}
            {elem.failed && <FailedTask data={elem} />}
          </React.Fragment>
        ))}

        </div>
        </>
    )
}

export default TaskList
