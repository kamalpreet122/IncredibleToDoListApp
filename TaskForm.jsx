import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function TaskForm({ handleAddTask }) {
  const [taskInput, setTaskInput] = useState('');

  const onAddTask = () => {
    if (taskInput.trim()) {
      handleAddTask(taskInput);
      setTaskInput('');  
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Add a new task..."
        value={taskInput}
        onChangeText={setTaskInput}
      />
      <Button title="Add" onPress={onAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default TaskForm;
