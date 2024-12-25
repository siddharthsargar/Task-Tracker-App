import React, { useState, useEffect } from 'react'
// import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({ currentTask, onUpdatetask, onAddTask, isEditing }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isEditing && currentTask) {
        setTitle(currentTask.title);
    }
  },[isEditing, currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing){
        onUpdatetask({...currentTask, title});
    } else {
        onAddTask({ title });
    }
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className='task-form'>
        <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Add a task'
            required
        />
        <button type='submit'>{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;