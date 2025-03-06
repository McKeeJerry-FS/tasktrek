import React, {useState} from 'react'
import Tag from './Tag'

import './TaskForm.css'

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [status, setStatus] = useState('todo');
  console.log(task);
  console.log(status);

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <header className='app_header'>
      <form action="">
        <input type="text" name="" id="" className="task_input" placeholder='Enter your task' onChange={handleTaskChange} />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select className="task_status" onChange={handleStatusChange}>
              <option value="todo">To Do</option>
              <option value="doing">In Progress</option>
              <option value="done">Completed</option>
            </select>
            <button type="submit" className='task_submit'> + Add Task </button>
          </div>
        </div>
      </form>
    </header>
  )
}

export default TaskForm