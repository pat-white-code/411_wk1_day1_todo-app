import React from 'react';
import './todolist.css';

const ToDoList = (props) => {
  return(
    <div>
      <h1>
        To Do:
      </h1>
      <ul>
        {props.todos.map((todo, index) => {
          let finished = props.isComplete(index);
          return (
            <li key={index} className={(finished ? 'complete' : 'incomplete')}> {todo} 
              <button onClick = {(!finished ? ()=>props.handleComplete(index) : ()=>{props.handleUnfinished(index)})}> {(!finished ? 'Mark Complete' : 'Mark Unfinished')}</button>
              <button data-index={index} onClick={props.removeTodo}>Clear</button> 
            </li>
            )
        })}
      </ul>
    </div>
  )
}

export default ToDoList;