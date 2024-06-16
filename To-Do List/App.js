import React,{useState} from 'react';
import './App.css'

function App() {
  const [todos,setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] =useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const addTodo = () =>{
    if(inputValue.trim()){
      setTodos([...todos,{ text : inputValue.trim(),isCompleted: false}]);
      setInputValue("");
    }
  };


  const deleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index));
  };

  const editTodo = (index) => {
    setCurrentTodo({index,text : todos[index].text});
    setIsEditing(true);
    setInputValue(todos[index].text);
  };

  const updateTodo = () => {
    let updateTodos = todos.map((todo,index) =>{
      if(index == currentTodo.index){
        return {...todo,text: inputValue };
      }
      return todo;
    });
    setTodos(updateTodos);
    setIsEditing(false);
    setInputValue("");
  }

  const toggleComplete = (index) => {
    let updateTodos = todos.map((todo,i) =>{
      if(i === index){
        return {...todo,isCompleted: !todo.isCompleted };
      }
      return todos;
    });
    setTodos(updateTodos)
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
      <button onClick={isEditing ? updateTodo : addTodo}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul>
        {todos.map((todo,index) =>(
          <li key={index}>
            <span style={{textDecoration: todo.isCompleted ? "line-through" : "none"}}
            onClick={() => toggleComplete(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))
        }
      </ul>
    </div>
  );
}

export default App;
