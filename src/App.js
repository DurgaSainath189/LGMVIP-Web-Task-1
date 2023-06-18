import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const App = () => {
  const [input, setInput] = useState("");
  const [todo, settodo] = useState([]);
  const [edittodo, setedittodo] = useState(null);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todo={todo}
            settodo={settodo}
            edittodo={edittodo}
            setedittodo={setedittodo}
          />
        </div>
        <div>
          <TodoList 
            todo={todo} 
            settodo={settodo} 
            setedittodo={setedittodo} 
          />
        </div>
      </div>
    </div>
  );
};

export default App;
