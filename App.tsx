import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Platform } from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddToDo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    { id: 1, text: '작업환경 설정', done: true },
    { id: 2, text: '리액트 네이티브 기초 공부', done: false },
    { id: 3, text: '투두리스트 만들어보기', done: false },
  ]);

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        style={styles.avoid}>
        <DateHead date={today} />
        {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
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
