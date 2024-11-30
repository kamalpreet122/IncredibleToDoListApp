import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function TaskList({ taskItems }) {
  return (
    <ScrollView>
      {taskItems.map((task, index) => (
        <Pressable key={index}>
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default TaskList;
