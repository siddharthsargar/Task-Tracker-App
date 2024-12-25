import React from 'react'
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div className='task-list'>
    {tasks.map((task) => (
        <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
        />
    ))}
    </div>
  );
};

export default TaskList;