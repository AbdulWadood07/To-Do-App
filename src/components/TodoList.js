import React from 'react'
import './TodoList.css'
export default function TodoList(props) {
  const {todo, index, markTodo, removeTodo} = props

  return (
    <div className='list'>
        <div className="todo">
            <span style={{textDecoration: todo.isDone ? 'line-through': ''}}>{todo.text}</span>
            <button onClick={() => markTodo(index)}>✓</button>
            <button className='remove' onClick={() => removeTodo(index)}>✕</button>
        </div>
    </div>
  )
}
