import React from 'react'
import AppHeading from './components/AppHeading'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

import './App.css'

const App = () => {
  return (
    <div className='app'>
      <AppHeading />
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