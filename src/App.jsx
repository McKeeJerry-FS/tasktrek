import React from 'react'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/fire.png'
import doneIcon from './assets/glowing-star.png'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <TaskForm />
      <main className="app_main">
        <TaskColumn taskIcon={todoIcon} taskHeading='To Do' />
        <TaskColumn taskIcon={doingIcon} taskHeading='In Progress'/>
        <TaskColumn taskIcon={doneIcon} taskHeading='Completed'/>
      </main>
    </div>
  )
}

export default App