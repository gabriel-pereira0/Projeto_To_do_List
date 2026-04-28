import React, { use, useEffect, useState } from 'react';
import './App.css';
import './index.css';

import { AddToDo } from './components/addToDo';
import { TodoList } from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Tarefa 1', completed: false },
    { id: 2, text: 'Tarefa 2', completed: false },
  ]);
  // Loga a lista de tarefas sempre que ela for atualizada
  useEffect(() => {
    console.log('Lista de tarefas atualizada: ', todos);
  }, [todos]);

  // Carrega as tarefas do localStorage quando o componente é montado
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem('todos');
    if (tarefasSalvas) {
      setTodos(JSON.parse(tarefasSalvas));
    }
  });

  // Salva as tarefas no localStorage sempre que a lista de tarefas for atualizada
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className='container'>
      <h1 className='app-title'>Lista de Tarefas</h1>

      {/* Botão Adicionar Tarefa */}
      <AddToDo onAddTodo={addTodo} />

      {/* Lista de Tarefas */}
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;
