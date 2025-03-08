import React, {useState} from 'react'
import Tag from './Tag'

import './TaskForm.css'

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: '',
    status: 'todo'
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setTaskData(prev => {
      return {
        ...prev,
        [name]: value
      };
    });  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task Submitted', taskData);
  };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit} className="task_form">
        <input type="text" name="task" className="task_input" placeholder='Enter your task' onChange={handleChange} />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select className="task_status" name='status' onChange={handleChange}>
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