import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddToDo';
import Empty from './components/Empty';

function App() {
  const today = new Date();

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        style={styles.avoid}>
        <DateHead date={today} />
        <Empty />
        <AddTodo />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  }
});

export default App;
