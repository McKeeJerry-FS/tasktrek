import React from 'react'


import './TaskColumn.css'

const TaskColumn = (props) => {
  console.log("Props", props);
  return (
    <section className="task_column">
      <h2 className='task_column_heading'><img src={props.taskIcon} className='task_column_icon' alt="" />{props.taskHeading}</h2>
    </section>
  );
}

export default TaskColumn