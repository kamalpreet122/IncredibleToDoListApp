import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import TaskList from './TaskList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Updated addTask function
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); // Append the new task to the existing tasks
  };

  return (
    <SafeAreaView>
      <TaskList taskItems={tasks} /> {/* Pass tasks to TaskList */}
      <ToDoForm addTask={addTask} /> {/* Pass addTask to ToDoForm */}
    </SafeAreaView>
  );
}

export default App;
