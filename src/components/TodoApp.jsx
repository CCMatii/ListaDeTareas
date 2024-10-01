import { useState } from 'react';
import ComponentForm from './ComponentForm';
import ComponentList from './ComponentList';
import { Container } from '@mantine/core';

function TodoApp(){

const [tasks, setTasks] = useState([]);

const addTask = (taskName) => {
  setTasks((prevTasks) => {
    const newTask = { id: prevTasks.length, name: taskName, completed: false };
    return [...prevTasks, newTask];
  });
};

const toggleTask = (id) => {
  setTasks((tasks) => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
};

const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};

return (<Container>
  <h1>To do List</h1>
  <ComponentForm addTask={addTask} />
  <ComponentList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
</Container>
);
};
export default TodoApp;
