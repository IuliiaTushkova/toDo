import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';


function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
  return (
    <div className="App flex-row">
      <header>
          <h1>My React list to do</h1>
      </header>
      <main>
          <Form
              inputText={inputText}
              todos={todos}
              setTodos={setTodos}
              setInputText={setInputText}
          />
          <ToDoList
              setTodos={setTodos}
              todos={todos}
          />
      </main>
    </div>
  );
}

export default App;
