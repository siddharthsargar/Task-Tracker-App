import React from 'react'

const TaskItem = ({ task, onDeleteTask, onEditTask }) => {
  return (
    <div className='task-item'>
        <span>{task.title}</span>
        <div>
            <button onClick={() => onEditTask(task)}>Edit</button>
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </div>
    </div>
  );
};


export default TaskItem;