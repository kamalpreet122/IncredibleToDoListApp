import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />  {/* Pass tasks to ToDoList */}
      <ToDoForm addTask={addTask} />  {/* Pass addTask function to ToDoForm */}
    </SafeAreaView>
  );
}

export default App;
