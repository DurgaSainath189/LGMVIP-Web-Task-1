import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todo, settodo, edittodo, setedittodo }) => {
  const  updatetodo=(title,id,completed)=>{
    const newtodo=todo.map((t)=>
      t.id===id?{title,id,completed}:t
    )
    settodo(newtodo);
    setedittodo("");
  }
  useEffect(()=>{
    if(edittodo){
      setInput(edittodo.title);
    }
    else{
      setInput("");
    }
  },[setInput,edittodo])
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!edittodo) {
      settodo([...todo, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    }
    else{
      updatetodo(input,edittodo.id,edittodo.completed)
    }
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a ToDo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {edittodo?"Ok":"Add"}
      </button>
    </form>
  );
};

export default Form;
