import React,{useState} from 'react';
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () =>{
    if(inputValue.trim()){
      setTodos([...todos,inputValue.trim()]);
      setInputValue("");
    }
  };


  const deleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input 
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Add a new Task"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo,index) =>(
          <li key={index}>
            {todo} <button onClick={(deleteTodo(index))}>Delete</button>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
