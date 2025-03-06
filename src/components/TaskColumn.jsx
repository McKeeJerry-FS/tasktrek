import React from 'react'
import TaskCard from './TaskCard'


import './TaskColumn.css'

const TaskColumn = ({taskHeading, taskIcon}) => {
  return (
    <section className="task_column">
      <h2 className='task_column_heading'><img src={taskIcon} className='task_column_icon' alt="" />{taskHeading}</h2>
      <TaskCard />
    </section>
  );
}

export default TaskColumn