import React from 'react'
<<<<<<< HEAD
=======
import Tag from './Tag'
import DeleteButton from '../assets/delete.png'
>>>>>>> 9d2c5b704f32257c4145e6e600731c2b45b3e600

import './TaskCard.css'

const TaskCard = () => {
  return (
    <article className="task_card">
<<<<<<< HEAD
      
    </article>



=======
      <p className="task_text">This is sample text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML"/>
          <Tag tagName="CSS"/>
        </div>
        <div className="task_delete">
          <img src={DeleteButton} className='deleteButton' alt="" />
        </div>
      </div>
    </article>
>>>>>>> 9d2c5b704f32257c4145e6e600731c2b45b3e600
  )
}

export default TaskCard