import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function ToDoForm({ addTask }) {
  // Manage local state for the input field
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      addTask(taskText); // Call addTask with the current input value
      setTaskText(''); // Clear the input field after adding the task
    }
  };

  return (
    <View style={styles.container}>
      {/* Input field with local state management */}
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)} // Update taskText state
        value={taskText} // Controlled component with taskText as value
      />
      {/* Button to trigger task addition */}
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default ToDoForm;
