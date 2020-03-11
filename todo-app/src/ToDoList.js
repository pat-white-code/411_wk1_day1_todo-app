import React from 'react';

const ToDoList = (props) => {
  return(
    <div>
      <h1>
        To Do:
      </h1>
      <ul>
        {props.todos.map((todo, index) => {
          return <li key={index}> {todo} 
            <button data-index={index} onClick={props.removeTodo}></button>
            </li>
        })}
      </ul>
    </div>
  )
}

export default ToDoList;