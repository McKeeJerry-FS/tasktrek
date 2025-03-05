import React from 'react'
import Tag from './Tag'

import './TaskForm.css'

const TaskForm = () => {
  return (
    <header className='app_header'>
      <form action="">
        <input type="text" name="" id="" className="task_input" placeholder='Enter your task' />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select name="" id="" className="task_status">
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