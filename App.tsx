import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddToDo';
import Empty from './components/Empty';

function App() {
  const today = new Date();

  return (
    <SafeAreaView style={styles.block}>
      <DateHead date={today} />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  }
});

export default App;
