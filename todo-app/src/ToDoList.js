import React from 'react';
import './todolist.css';
import ToDo from './ToDo';

const ToDoList = (props) => {
  return(
    <div>
      <h1>
        To Do:
      </h1>
      <ul>
        {props.todos.map((todo, index) => {

          return <ToDo 
            todo = {todo} 
            key = {index} 
            handleComplete={props.handleComplete}
            handleUnfinished={props.handleUnfinished}
            removeTodo={props.removeTodo} />
          {/* let finished = props.isComplete(index);
          return (
            <li key={index} className={(finished ? 'complete' : 'incomplete')}> {todo.text} -- {moment(todo.timeStamp).fromNow()} 
              <button onClick = {(!finished ? ()=>props.handleComplete(index, todo.timeStamp) : ()=>{props.handleUnfinished(index)})}> {(!finished ? 'Mark Complete' : 'Mark Unfinished')}</button>
              <button data-index={index} onClick={props.removeTodo}>Clear</button> 
            </li>
            ) */}
        })}
      </ul>
    </div>
  )
}

export default ToDoList;