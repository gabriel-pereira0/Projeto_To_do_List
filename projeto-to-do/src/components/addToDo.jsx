import React, { useState } from 'react';
import './addToDo.css';

export function AddToDo({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const hangleChange = (e) => {
    setInputValue(e.target.value);
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setErrorMessage('Digite uma tarefa...');
    } else {
      // Lógica para adicionar a tarefa à lista
      onAddTodo(inputValue.trim());
      setInputValue('');
      setErrorMessage('');
    }
  };

  return (
    <form className='add-todo-form' onSubmit={handleSubmit}>
      <div className='input-container'>
        <input
          className='todo-input'
          type='text'
          placeholder='Digite uma Tarefa...'
          onChange={hangleChange}
          value={inputValue}
        />
        {errorMessage && <span className='error-message'>{errorMessage}</span>}
      </div>
      <button type='subtmit' className='add-button'>
        Adicionar
      </button>
    </form>
  );
}
