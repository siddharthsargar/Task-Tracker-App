import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { fetchTasks, addTask, deleteTask } from './api';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);


  useEffect(() => {
    const getTasks = async () => {
      const tasksFromAPI = await fetchTasks();
      setTasks(tasksFromAPI);
    };
    getTasks();
  }, []);


  const handleAddTask = async (task) => {
    const newTask = { ...task, id: uuidv4() }; 
    await addTask(newTask);
    setTasks([...tasks, newTask]);
    console.log("add task is",tasks)
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task.id !== id));
    console.log("delete task is",tasks)
  };


  const handleEditTask = (task) => {
    setIsEditing(true);
    setCurrentTask(task);
  };


  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
    setCurrentTask(null);
  };

  return (
    <div className='app'>
      <h1>Task Tracker</h1>
      <TaskForm
        onAddTask={handleAddTask}
        onUpdatetask={handleUpdateTask}
        isEditing={isEditing}
        currentTask={currentTask}
      />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
};

export default App;