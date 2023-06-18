import React from "react";

const TodoList = ({ todo, settodo ,setedittodo}) => {
  const handleComplete = (t)=>{
    settodo(
      todo.map((item)=>{
        if(item.id===t.id){
          return {...item,completed:!item.completed}
        }
        return item;
      })
    )
  }
  const handleEdit = ({id})=>{
    const findtodo=todo.find((t)=>t.id===id)
    setedittodo(findtodo)
  }
  const handleDelete = ({ id }) => {
    settodo(todo.filter((t) => t.id !== id));
  };
  return (
    <div>
      {todo.map((t) => (
        <li className="list-item" key={t.id}>
          <input
            type="text"
            value={t.title}
            className={`list ${t.completed?"complete":""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(t)}>
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="button-edit task-button" onClick={()=>handleEdit(t)}>
              <i className="fa fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(t)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodoList;
